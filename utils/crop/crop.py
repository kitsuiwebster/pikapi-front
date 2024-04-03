import os
from PIL import Image

def resize_images(input_dir, output_dir, target_resolution=(768, 768)):
    # Create the output directory if it doesn't exist
    os.makedirs(output_dir, exist_ok=True)

    # Get a list of all files in the input directory
    files = os.listdir(input_dir)
    files.sort()  # Sort the files alphabetically

    # Resize and save each image
    for filename in files:
        # Construct full paths for input and output images
        input_path = os.path.join(input_dir, filename)
        output_path = os.path.join(output_dir, filename)

        # Open the image
        image = Image.open(input_path)

        print(f"👉 Resizing {filename}...")
        # Resize the image while preserving aspect ratio
        image.thumbnail(target_resolution)

        # Save the resized image
        image.save(output_path)

# Input and output directories
input_dir = "./input/"
output_dir = "./output/"

# Resize images from input directory and save to output directory
resize_images(input_dir, output_dir)
print("💯 All images processed!")
