
function get(){
	
	time=11;
var count=setInterval(function()
{
time--;
document.getElementById('timing').innerHTML=time;
if(time<=0)
{
  aler();
	clearInterval(count);
	document.getElementById('timing').style.background="red";
}
},1000);
ran();
}
function ran()
{
	
 
	var q=["white","gray","orange","red","pink","purple","voilet","black","faltu"];
	var w=["1","2","3","4","5","6","7","8","9"];
	for(var x=0;x<9;x++)
	{
     document.getElementById(w[x]).innerHTML=q[x];
     
     
     }
	}
	
var arr=["8","3","7","9","1","4","2","5","6"];

function clk()
{

var b=(arr.length)-1;
var q1=["white","gray","orange","red","pink","purple","voilet","black","faltu"];
var t=arr[b];
for(var y=8;y>=1;y--)
{
	arr[y]=arr[y-1];
}
arr[0]=t;
for(var x=0;x<9;x++)
	{
     document.getElementById(arr[x]).innerHTML=q1[x];
     var u=q1[x];
     changer(u);

	}
	}




function changer(u)
{
var q1=["white","gray","orange","red","pink","purple","voilet","black","faltu"];
var t=Math.floor(Math.random()*10);
if(t==9)
	{
		t=t-1;
    }
var r=q1[t];	

document.getElementById("change").innerHTML=q1[t];
comp(u,r);
}


var c=0;

function comp(u,r)
{

if(u==r)
	{
		c=c+1;
		console.log(c);
	document.getElementById('pts').innerHTML=c;
	
}
}

function aler(){
	if(c>0)
alert("your final score is:=" + c);
else
{ 
	var b=0;
	alert("your final score is:=" +b);
}
}