from PIL import Image
import os

def fix_neon_logo(input_path, output_path):
    print(f"Processing {input_path}...")
    try:
        img = Image.open(input_path).convert("RGB")
        width, height = img.size
        pixels = img.load()
        
        new_img = Image.new("RGBA", (width, height))
        new_pixels = new_img.load()
        
        # Black point threshold. Pixels darker than this will be removed.
        # The user sees a box, which suggests the "black" isn't 0,0,0 but maybe 10,10,10 or similar.
        # We will crush everything below this value to 0.
        BLACK_POINT = 30 
        
        for y in range(height):
            for x in range(width):
                r, g, b = pixels[x, y]
                
                # 1. Shift Black Point
                # Subtract the threshold from the color to "crush" the blacks
                # This removes the faint gray box background
                r = max(0, r - BLACK_POINT)
                g = max(0, g - BLACK_POINT)
                b = max(0, b - BLACK_POINT)
                
                # 2. Re-amplify
                # Since we darkened everything, we multiply back up slightly to restore brightness to the neon parts
                # avoiding integer overflow
                multiplier = 255.0 / (255.0 - BLACK_POINT)
                r = int(min(255, r * multiplier))
                g = int(min(255, g * multiplier))
                b = int(min(255, b * multiplier))
                
                # 3. Create Alpha
                # For a neon logo, transparency is often well-represented by the maximum brightness of the pixel
                max_val = max(r, g, b)
                
                if max_val == 0:
                    new_pixels[x, y] = (0, 0, 0, 0)
                else:
                    # Soften the alpha curve. 
                    # We want bright pixels to be opaque, but dim pixels to be semi-transparent (the glow)
                    alpha = max_val
                    
                    # Optional: Boost opacity for visibility
                    # alpha = int(min(255, alpha * 1.5))
                    
                    new_pixels[x, y] = (r, g, b, alpha)

        new_img.save(output_path, "PNG")
        print(f"Saved to {output_path}")
        
    except Exception as e:
        print(f"Error processing {input_path}: {e}")

base_dir = r"d:\Desktop\Personal Project\Skia Automated Solutions Website\assets"
# Use the ORIGINAL upload, not the already processed one, to avoid compounding errors
# Assuming logo_icon_new.png is the source
fix_neon_logo(os.path.join(base_dir, "logo_icon_new.png"), os.path.join(base_dir, "logo_icon_v4.png"))
