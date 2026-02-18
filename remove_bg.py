from PIL import Image
import os

def remove_black_background(input_path, output_path, threshold=30):
    print(f"Processing {input_path}...")
    try:
        img = Image.open(input_path).convert("RGBA")
        datas = img.getdata()
        
        newData = []
        for item in datas:
            # item is (R, G, B, A)
            # Check if pixel is dark (black background)
            if item[0] < threshold and item[1] < threshold and item[2] < threshold:
                newData.append((0, 0, 0, 0))  # Transparent
            else:
                newData.append(item)
        
        img.putdata(newData)
        img.save(output_path, "PNG")
        print(f"Saved to {output_path}")
    except Exception as e:
        print(f"Error processing {input_path}: {e}")

# Process both logos
base_dir = r"d:\Desktop\Personal Project\Skia Automated Solutions Website\assets"
remove_black_background(os.path.join(base_dir, "logo_icon_new.png"), os.path.join(base_dir, "logo_icon_transparent_final.png"))
remove_black_background(os.path.join(base_dir, "logo_text_new.png"), os.path.join(base_dir, "logo_text_transparent_final.png"))
