#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 提交代码测试
git add -A
git commit -m "脚本发布保存..."
git pull
git push origin master
# 生成静态文件发布到github
npm run build:github
cd docs/.vuepress/dist
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:jiangzhangxiang/blog.git master:gh-pages

# 发布到阿里云
#npm run build:aliyun
#cd ..
#ssh root@jzx -C "rm -rf /home/web/blog/dist"
#scp -r dist root@jzx:/home/web/blog/dist
#
#cd -
