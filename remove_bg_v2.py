from PIL import Image
import os
import math

def unmultiply_alpha(img_path, out_path, is_text=False):
    print(f"Processing {img_path}...")
    try:
        img = Image.open(img_path).convert("RGB")
        width, height = img.size
        pixels = img.load()
        
        # Create new RGBA image
        new_img = Image.new("RGBA", (width, height))
        new_pixels = new_img.load()
        
        for y in range(height):
            for x in range(width):
                r, g, b = pixels[x, y]
                
                if is_text:
                    # For white text on black:
                    # Alpha is just the brightness. 
                    # Set RGB to pure white (or keep slight tint if needed, but pure white is cleaner for text)
                    
                    # Calculate luminance
                    lum = int(0.299*r + 0.587*g + 0.114*b)
                    
                    # Apply a "levels" adjustment to clean up near-blacks (remove noise)
                    # Anything below brightness 40 becomes 0 alpha
                    # Anything above 200 becomes 255 alpha
                    black_point = 40
                    white_point = 230
                    
                    if lum < black_point:
                        alpha = 0
                    elif lum > white_point:
                        alpha = 255
                    else:
                        # Map range [black_point, white_point] to [0, 255]
                        alpha = int((lum - black_point) / (white_point - black_point) * 255)
                    
                    if alpha > 0:
                        new_pixels[x, y] = (255, 255, 255, alpha)
                    else:
                        new_pixels[x, y] = (0, 0, 0, 0)
                        
                else:
                    # For Neon/Color on black:
                    # "Unmultiply" logic.
                    # Alpha is the maximum channel value.
                    # Normalized Color = Original Color / Alpha
                    
                    max_channel = max(r, g, b)
                    
                    # Noise gate: if max channel is very low, kill it to remove compression artifacts
                    if max_channel < 25: 
                        new_pixels[x, y] = (0, 0, 0, 0)
                        continue
                        
                    alpha = max_channel
                    
                    # Boost opacity slightly for visibility if it's too faint
                    # alpha = min(255, int(alpha * 1.2))
                    
                    if alpha > 0:
                        # Reconstruct original color intensity relative to alpha
                        # Prevent division by zero
                        # (We want the color that, when put on black, looks like the original)
                        # Pixel = Color * Alpha + Black * (1-Alpha)
                        # So Pixel = Color * Alpha
                        # Color = Pixel / Alpha
                        
                        nr = int(min(255, (r / max_channel) * 255))
                        ng = int(min(255, (g / max_channel) * 255))
                        nb = int(min(255, (b / max_channel) * 255))
                        
                        new_pixels[x, y] = (nr, ng, nb, alpha)
                    else:
                        new_pixels[x, y] = (0, 0, 0, 0)

        new_img.save(out_path, "PNG")
        print(f"Saved to {out_path}")
        
    except Exception as e:
        print(f"Error processing {img_path}: {e}")

base_dir = r"d:\Desktop\Personal Project\Skia Automated Solutions Website\assets"

# Re-process from the 'new' originals (assuming they were the uploaded ones)
# Note: Ensure these are the ones with the black background
unmultiply_alpha(os.path.join(base_dir, "logo_icon_new.png"), os.path.join(base_dir, "logo_icon_v3.png"), is_text=False)
unmultiply_alpha(os.path.join(base_dir, "logo_text_new.png"), os.path.join(base_dir, "logo_text_v3.png"), is_text=True)
