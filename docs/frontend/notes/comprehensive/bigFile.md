### 断点续传的重点是文件的切割与合并，整个上传流程需要前后端配合好，细节较多。秒传的关键是如何快速计算大文件的摘要信息。我们最后再梳理下文件上传的完整流程。

1. 获得文件后，使用 Blob 对象的 slice 方法对其进行切割，并封装一些上传需要的数据，文件切割的速度很快，不影响主线程渲染。
2. 计算整个文件的 MD5 ( js-spark-md5 ) 值，大文件比较耗时，我们将这部分任务放在 Web Worker 中执行。
3. 获得文件的 MD5 值之后，我们将 MD5 值以及文件大小发送到后端，后端查询是否存在该文件，如果不存在的话，查询是否存在该文件的切片文件，如果存在，返回切片文件的详细信息。
4. 根据后端返回结果，依次判断是否满足“秒传” 或是 “断点续传” 的条件。如果满足，更新文件切片的状态与文件进度。
5. 根据文件切片的状态，发送上传请求，由于存在并发限制，我们限制 request 创建个数，避免页面卡死。
6. 对于上传失败的文件，设置最大重试次数，将其继续加入到上传任务中，超过最大重试次数的才认为上传失败。
7. 后端收到文件后，首先保存文件，保存成功后记录切片信息，判断当前切片是否是最后一个切片，如果是最后一个切片，记录文件信息，认为文件上传成功，清空切片记录。

### 目前还有一些可以优化的点。

1. 多人上传同一个文件，只要其中一人上传成功即可认为其他人上传成功。
2. 拥塞控制，动态计算文件切片大小，大圣老师文章中已经实现。
3. 进度条优化，进度条在断点续传和失败重传会出现倒退的情形，