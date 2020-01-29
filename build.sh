# # ---------- Сжатие шрифтов ------------------

# for file_path in ./static/fonts/src/*; do           # ./static/fonts/src/Xolonium.ttf

#     file_name_with_extension=$(basename $file_path) # Xolonium.ttf
#     file_name=${file_name_with_extension%%.*}       # Xolonium

#     echo Processing $file_name
    
#     pyftsubset $file_path --output-file=./static/fonts/$file_name.min.otf --unicodes-file=/reactpizza/static/fonts/unicodes-file/$file_name.txt

# done



# -----------Уменьшение разрешения салатов и паст---------------

salads=`for i in ./static/art/src/product.salad.*

do
  echo -n "$i "                
done`

pasta=`for i in ./static/art/src/product.pasta.*

do
  echo -n "$i "                
done`


salads_pasta=($salads $pasta)                                # массив из салатов и паст

for src_path in ${salads_pasta[*]}; do

    file_name_with_extension=$(basename $src_path)   
    file_name=${file_name_with_extension%.*}
    dst_path=./static/art/${file_name}.jpg
    
    #echo Clipping salads_pasta $src_path to $dst_path
    sharp -i $src_path -o $dst_path resize 1200 800         # Задает размер                                                         
done

# -----------Уменьшение разрешения бэкграундов---------------

for src_path in ./static/art/src/background.*; do

    file_name_with_extension=$(basename $src_path)   
    file_name=${file_name_with_extension%.*}
    dst_path=./static/art/${file_name}.jpg

    #echo Clipping backgrounds $src_path to $dst_path
    sharp -i $src_path -o $dst_path resize 2880 1800                                                
done

for src_path in ./static/art/src/verticalbackground.*; do

    file_name_with_extension=$(basename $src_path)   
    file_name=${file_name_with_extension%.*}
    dst_path=./static/art/${file_name}.jpg
    
    #echo Clipping verticals $src_path to $dst_path
    sharp -i $src_path -o $dst_path resize 1800 2880                                             
done


#---------- Сжатие картинок ------------------

for src_path in ./static/art/*.jpg; do                  # ПОМЕНЯЙ ПАПКУ

    file_name_with_extension=$(basename $src_path)
    file_name=${file_name_with_extension%.*}            # убирает 

    dst_path=./static/art/${file_name}.jpg
    
    # echo File name $file_name
    # echo Compressing $file_name to $dst_path

    guetzli --quality 84 $src_path $dst_path
done

# -----------Минифицированные версии картинок---------------

for src_path in ./static/art/product.*; do

    file_name_with_extension=$(basename $src_path)   
    file_name=${file_name_with_extension%.*}

    dst_path=./static/art/${file_name}.min.jpg
    
    echo Clipping $src_path to $dst_path

    #sharp -i $src_path -o $dst_path extract 40 40 1160 1160     # Скрипт, который вырезает указанную область (<top> <left> <width> <height>)
    sharp -i $src_path -o $dst_path resize 400 400               # Задает размер  ПОПРОБУЙ 400                                                     
done
