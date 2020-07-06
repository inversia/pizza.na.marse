echo Publishing to GitHub Pages \
&& git checkout release \
&& cp .gitignore .gitignore_saved \
&& git rm -r '*' \
&& cp .gitignore_saved .gitignore \
&& cp -rf dist/* . \
&& git add --ignore-errors -A \
&& git commit -am "new build" \
&& git push \
&& git checkout master