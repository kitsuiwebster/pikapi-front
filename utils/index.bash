#!/bin/bash

cd add_logo
python3 add_logo.py
echo "✅ Add logo script completed"
echo "---------------------------------"
echo "🎯 Moving files to crop input folder"
mv /home/ash/kitsui/pikapi/pikapi-front/utils/add_logo/output/* /home/ash/kitsui/pikapi/pikapi-front/utils/crop/input/
echo "✅ Files moved to crop input folder"
echo "---------------------------------"
echo "🎯 Running crop script"
cd ..
cd crop
python3 crop.py
echo "✅ Crop script completed"
echo "---------------------------------"
echo "🎯 Moving files to rename input folder"
mv /home/ash/kitsui/pikapi/pikapi-front/utils/crop/output/* /home/ash/kitsui/pikapi/pikapi-front/utils/rename/input/
echo "✅ Files moved to rename input folder"
echo "---------------------------------"
echo "🎯 Running rename script"
cd ..
cd rename
python3 rename.py
echo "✅ Rename script completed"
echo "---------------------------------"
echo "💯 All scripts completed successfully !"
