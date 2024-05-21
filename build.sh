mkdir -p ./build/
zip -r -FS ./build/uitube.zip * --exclude '*.git*' 'build.sh' 'public/*'
