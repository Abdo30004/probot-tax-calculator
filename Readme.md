# probot-tax-calculator
![NPM version][npm-version-image]
![NPM downloads][npm-downloads-image]


### **En** : A simple package that calculates the tax of the pro-bot **(Discord)**

### **Ar **: بكج بسيط يقوم بحساب ضريبة البرو بوت


### **المميزات**
- **يقوم البكج بإعطاءك النتائج النهائية لعملية الحساب**
- **يدعم البكج تغيير قيمة ضريبة الوسيط**
- **تكون نتائج عملية الحساب على شكل object**

# **For Developers :**
```js
const ptax =require('probot-tax-calculator')
//البكج يرجع object 
Exapmle : ptax.tax("1000")
{ 
"protax": 50,//ضريبة البوت
"wasitTax": 25,//ضريبة الوسيط
"tax": 75,//مجموع الضرائب (ضريبة البوت + الوسيط)
"all": 1075//المبلغ اللازم تحويله
}
//النسبة المئوية الافتراضية لضريبة الوسيط هي 2.5

//يمكنك تغيير قيمة الضريبة الخاصة بالوسيط
Exapmle : ptax.tax("1000",5)//هنا 5 تعني 5 بالمئة من المبلغ 1000 
{ 
"protax": 50,//ضريبة البوت
"wasitTax": 50,//ضريبة الوسيط
"tax": 100,//مجموع الضرائب (ضريبة البوت + الوسيط)
"all": 1100//المبلغ اللازم تحويله
}

Note : "يقبل البكج انواع المتغيرات التالية"

Integer : ptax.tax(1000)

String :ptax.tax("1000")

Float :ptax.tax(1000.0002)//Math.floor 

//البكج يقوم تلقائيا بالتدوير إلى اقرب عدد ان كان الناتج عدد عشري اي :

//12.2 => 12

//12.5 => 13

//55.1 => 55
```



# **For copypasters :**
```js
const Discord = require('discord.js');
const client = new Discord.Client();

const ptax =require('probot-tax-calculator');

client.on("message",message=>{
  if(message.content.startsWith("!tax")){
    let amount=message.content.split(" ").slice(1).join(" ");
    if(!amount) {return message.channel.send("**يرجى ادخال عدد**")}
    let tax=ptax.tax(amount);
    var taxembed=new Discord.MessageEmbed()
    .setTitle("Tax Calculator")
    .addField("**ضريبة البرو بوت**",`**${tax.protax}**`)
    .addField("**ضريبة الوسيط**",`**${tax.wasitTax}**`)
    .addField("**مجموع الضرائب**",`**${tax.tax}**`)
    .addField("**المبلغ اللازم تحويله**",`**${tax.all}**`)
    .setFooter("**This package was made by Abderrahmane**")
    message.channel.send(taxembed);
    
  }});
client.on("message",message=>{
  if(message.content.startsWith("!wasitTax")){
    let amount=message.content.split(" ").slice(1,2).join(" ");
    let wasit=message.content.split(" ").slice(2).join(" ");
    if(!amount) {return message.channel.send("**يرجى ادخال عدد**")}
    let tax=ptax.tax(amount,wasit);
    var taxembed=new Discord.MessageEmbed()
    .setTitle("Tax Calculator")
    .addField("**ضريبة البرو بوت**",`**${tax.protax}**`)
    .addField("**ضريبة الوسيط**",`**${tax.wasitTax}**`)
    .addField("**مجموع الضرائب**",`**${tax.tax}**`)
    .addField("**المبلغ اللازم تحويله**",`**${tax.all}**`)
    .setFooter("**This package was made by Abderrahmane**")
    message.channel.send(taxembed);
    
  }});

client.login("Token")
```
![tax](https://cdn.discordapp.com/attachments/802919685834014781/839189122869362758/unknown.png)

![wasit](https://cdn.discordapp.com/attachments/802919685834014781/839189363266420778/unknown.png)

# **Links :**
[**GitHub**](https://github.com/Abdo30004)

[**Dm**](https://discord.com/channels/@me/760952710383665192)

![Avatar](https://cdn.discordapp.com/avatars/760952710383665192/096d2b0e3f015535b4bf8a100b88d409.png)

[npm-url]: https://npmjs.org/package/probot-tax-calculator
[npm-version-image]: https://img.shields.io/npm/v/probot-tax-calculator.svg?style=flat
[npm-downloads-image]: https://img.shields.io/npm/dm/probot-tax-calculator.svg?style=flat
[npm-downloads-url]: https://npmcharts.com/compare/probot-tax-calculator?minimal=true