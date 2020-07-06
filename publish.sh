echo Publishing to GitHub Pages \
&& git checkout gh-pages \
&& cp .gitignore .gitignore_saved \
&& cp CNAME CNAME_saved \
&& git rm -r '*' \
&& mv .gitignore_saved .gitignore \
&& mv CNAME_saved CNAME \
&& cp -rf dist/* . \
&& git add --ignore-errors -A \
&& git commit -am "new build" \
&& git push \
&& git checkout master