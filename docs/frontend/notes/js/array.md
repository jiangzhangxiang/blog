### 相同点
都是对数组进行截取。

### 不同点
slice不会改变原数组，也可用于字符串。但是splice会直接改变原数组。

### slice用法 

1. 语法
array.slice(start, end);

2. 参数
start: 可选。规定从何处开始选取。如果该参数为负数，则表示从原数组中的倒数第几个元素开始提取，slice(-2) 表示提取原数组中的倒数第二个元素到最后一个元素（包含最后一个元素）。

end: 可选。规定从何处结束选取。该参数是数组片断结束处的数组下标。如果没有指定该参数，那么切分的数组包含从 start 到数组结束的所有元素。如果该参数为负数， 则它表示在原数组中的倒数第几个元素结束抽取。 slice(-2,-1) 表示抽取了原数组中的倒数第二个元素到最后一个元素（不包含最后一个元素，也就是只有倒数第二个元素）。



### splice用法
1. 语法
array.splice(index, howmany, item1, ..., itemX);

2. 参数
index: 必需。规定从何处添加/删除元素。该参数是开始插入和（或）删除的数组元素的下标，必须是数字。

howmany: 可选。规定应该删除多少元素。必须是数字，但可以是 "0"。如果未规定此参数，则删除从 index 开始到原数组结尾的所有元素。

item1, ..., itemX: 可选。要添加到数组的新元素。

#### split 把一个字符串分割成字符串数组:
1. 语法
string.split(separator,limit)

2. 参数
separator: 可选。字符串或正则表达式，从该参数指定的地方分割 string Object。

limit: 可选。该参数可指定返回的数组的最大长度。如果设置了该参数，返回的子串不会多于这个参数指定的数组。如果没有设置该参数，整个字符串都会被分割，不考虑它的长度。
