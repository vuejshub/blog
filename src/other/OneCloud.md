---
icon: pen-to-square
date: 2023-05-2
category:
  - 工具
tag:
  - 分享
star: true
sticky: true
---

# 玩客云OneCloud刷Armbian最全资料


## 刷机

https://hicairo.com/post/76.html 玩客云盒子（OneCloud）刷 Armbian 系统

https://mao.fan/article/36 玩客云刷机armbian变身openwrt旁路由教程

https://rupu.net/archives/armbian-init Armbian环境一键初始化脚本

https://isedu.top/index.php/archives/141/ 玩客云刷机-玩机教程

https://mymuwu.net/?p=985 拯救玩客云，刷入armbian实现远程下载、nas、docker等功能

https://github.com/hzyitc/armbian-onecloud/releases 固件 

## App

https://casaos.io/ 开源Nas系统

https://longdada.me/onecloud-shuaji-armbian-install-1panel-alist/ 玩客云刷机 Armbian，安装 1panel、Alist

https://alexpeng.cn/post/165.html armbian系统查看CPU温度

https://juejin.cn/post/7293392480452247562 **frp: 内网穿透利器 🐂🐂🐂**
https://github.com/SuperNG6/Docker-qBittorrent-Enhanced-Edition 增强版 屏蔽迅雷

### 安装Docker

```bash
# 方法1
sudo apt update
sudo apt install docker.io
# 方法2
curl -fsSL https://get.docker.com | bash
docker --version

sudo systemctl start docker # 手动启动Docker
sudo systemctl enable docker # 系统启动时自动启动
```

### 挂载硬盘

https://blog.csdn.net/qq_38265101/article/details/105470939

```bash
# 查看系统所检测到的磁盘，这里的 sda1检测到的硬盘但是没有被挂载（注意：这里sda1 是’1’ 而不是’L’，有些可能是sdb1。）
lsblk
# 在根目录新建一个目录用于挂载硬盘，命令如下：
cd /.				#进入根目录
mkdir mnts			#新建目录名为‘mnts’ 可用'ls'查看
# 挂载新增的磁盘sda1（所有新增硬盘都在/dve/目录下）
mount /dev/sda1 /mnts/		#挂载到 mnts
cd /mnts/					#进入挂载的硬盘 'ls'查看内容

# 显示硬盘信息，并记下UUID，
blkid /dev/sda1

UUID=F05B7F51EF76F2F6   /mnts      ntfs    defaults        0 0
# 修改 /etc/fstab 即可。例如我就是在 fstab 最后添加这行：
UUID=F05B7F51EF76F2F6   /mnts      ntfs    defaults        0 0

# 修改fstab
vi /etc/fstab
# 挂载
mount -a
```

### 看门狗

```bash
# 可以用来进行检测温度的工具
armbianmonitor -m
htop # top增强版，可以观察温度信息
glances # 性能监测工具
# 可以通过system-config 来降频 将频率降低到1000MHZ以下
armbian-config
## 选择CPU一栏即可
## 其它保持默认选项
# 安装自动重启 工具 看门狗 watch-dog
apt install watchdog -y
mkdir -p /var/log/watchdog
echo “watchdog_options="-s -v -c /etc/watchdog.conf"" >> /etc/default/watchdog
sed -i 's/# watchdog-device         = \/dev\/watchdog/watchdog-device         = \/dev\/watchdog/g' /etc/watchdog.conf
sed -i 's/# watchdog-timeout        = 15/watchdog-timeout        = 15/g' /etc/watchdog.conf
# 启动看门狗
sudo systemctl enable watchdog.service
sudo systemctl start watchdog.service

# https://docs.jethome.ru/en/controllers/linux/howto/watchdog.html
```


