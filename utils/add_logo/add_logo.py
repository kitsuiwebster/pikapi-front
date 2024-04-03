import os
from PIL import Image

def overlay_images(background_image_path, foreground_image_path, output_image_path):
    # Open the background and foreground images
    background = Image.open(background_image_path)
    foreground = Image.open(foreground_image_path)

    # Overlay the foreground image onto the background image
    background.paste(foreground, (0, 0), foreground)

    # Save the resulting image
    background.save(output_image_path)

# Input and output directories
input_dir = "./input/"
output_dir = "./output/"

# Create the output directory if it doesn't exist
os.makedirs(output_dir, exist_ok=True)

# Iterate over each file in the input directory
for filename in os.listdir(input_dir):
    if filename.endswith(".png") or filename.endswith(".jpg"):
        print(f"👉 Processing {filename}...")
        # Construct full paths for input and output images
        background_image_path = os.path.join(input_dir, filename)
        foreground_image_path = os.path.join("foreground.png")  # Assuming same foreground for all backgrounds
        output_image_path = os.path.join(output_dir, filename)

        # Overlay images and save the output
        overlay_images(background_image_path, foreground_image_path, output_image_path)

print("💯 All images processed!")