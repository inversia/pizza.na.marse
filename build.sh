# ---------- Сжатие картинок ------------------

for src_path in ./static/art/src/*; do

    file_name_with_extension=$(basename $src_path)
    file_name=${file_name_with_extension%%.*}

    dst_path=./static/art/${file_name}.jpg
    
    echo Compressing $file_name to $dst_path

    guetzli --quality 85 $src_path $dst_path
done

# ---------- Сжатие шрифтов ------------------

for file_path in ./static/fonts/src/*; do           # ./static/fonts/src/Xolonium.ttf

    file_name_with_extension=$(basename $file_path) # Xolonium.ttf
    file_name=${file_name_with_extension%%.*}       # Xolonium

    echo Processing $file_name
    
    pyftsubset $file_path --output-file=./static/fonts/$file_name.min.otf --unicodes-file=/reactpizza/static/fonts/unicodes-file/$file_name.txt

done