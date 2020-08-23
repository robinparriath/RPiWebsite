#! /bin/bash
source_folder="/media/HDD/git/RPiWebsite/"
target_folder="/media/HDD/"

cd $source_folder
#git pull

for file in `cat github_to_server.txt`
do cp $source_folder$file $target_folder$file
done

