import os

def rename_and_move_files(input_dir, output_dir):
    # Get a list of all files in the input directory
    files = os.listdir(input_dir)
    files.sort()  # Sort the files alphabetically

    # Rename and move each file
    for i, filename in enumerate(files):
        # Construct the new filename
        new_filename = f"{i:03d}.png"  # Formats the index with leading zeros

        # Construct full paths for the old and new filenames
        old_path = os.path.join(input_dir, filename)
        new_path = os.path.join(output_dir, new_filename)

        print(f"👉 Renaming {filename} to {new_filename}...")
        # Rename the file
        os.rename(old_path, new_path)

# Input and output directories
input_dir = "./input/"
output_dir = "./output/"

# Create the output directory if it doesn't exist
os.makedirs(output_dir, exist_ok=True)

# Rename and move files from input to output directory
rename_and_move_files(input_dir, output_dir)
print("💯 All images processed!")