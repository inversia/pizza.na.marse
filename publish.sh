echo Publishing to GitHub Pages \
&& git checkout release \
&& git rm *.html *.js *.css *.map \
&& cp dist/* . \
&& git add --ignore-errors -A \
&& git commit -am "new build" \
&& git push \
&& git checkout master