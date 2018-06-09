#!/bin/bash  
shopt -s nullglob  
for f in ~/apiNode/coverageMaps/*.hgt; do  
    echo "Converting $f"  
    srtm2sdf $f 
done 
