## 多个git 邮箱设置

#### 在IDEA中提交代码到github中，没有新增贡献值。该问题是因为本地git工具中的name和email和github中的不对应。


当本地有多个项目时，可以根据git的配置级别，设置不同的用户和邮箱。

git配置有三个级别：system（系统级）、global（用户级别）、local（版本级别）。

这三个是逐层覆盖的。先去查找system、接着是global、最后是local。

可以将常用的一个设置为system、将不常用的设置为local即可。

只要这样设置和github中的设置一样就可以解决上述问题。


1. System配置

```
git config --system user.name "name"

git config --system user.email myuser@email.com
```

2. global配置
```
git config --global user.name "name"

git config --global user.email myuser@email.com
```

3. local配置
```
git config --local user.name "name"

git config --local user.email myuser@email.com
```