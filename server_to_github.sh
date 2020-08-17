#! /bin/bash
source_folder="/media/HDD/"
target_folder="/media/HDD/git/RPiWebsite/"
cd $source_folder
for file in `cat server_to_github.txt`
do cp $source_folder$file $target_folder$file
done
cd $target_folder
todays_date=`date +%F`
git commit -am "Data for $todays_date"
git push 
