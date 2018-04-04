/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// import React,{Component} from 'react'
// import {SectionList,StyleSheet,View,Text} from 'react-native'

/**
*网络
*使用Fetch
*React Native提供了和web标准一致的Fetch API，用于满足开发者访问网络的需求。
*如果你之前使用过XMLHttpRequest(即俗称的ajax)或是其他的网络API，那么Fetch用起来将会相当容易上手。
*/

/**
*要从任意地址获取内容的话，只需简单地将网址作为参数传递给fetch方法即可（fetch这个词本身也就是获取的意思）：
*/
// fetch('https://mywebsite.com/mydata.json')

/**
*Fetch还有可选的第二个参数，可以用来定制HTTP请求一些参数。你可以指定header参数，或是指定使用POST方法，又或是提交数据等
*
*/
// fetch('https://mywebsite.com/endpoint/', {
//   method: 'POST',
//   headers: {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     firstParam: 'yourValue',
//     secondParam: 'yourOtherValue',
//   })
// })

/**
*提交数据的格式关键取决于headers中的Content-Type。Content-Type有很多种，对应body的格式也有区别。
*到底应该采用什么样的Content-Type取决于服务器端，所以请和服务器端的开发人员沟通确定清楚。
*常用的'Content-Type'除了上面的'application/json'，还有传统的网页表单形式。
*/
// fetch('https://mywebsite.com/endpoint/', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/x-www-form-urlencoded',
//   },
//   body: 'key1=value1&key2=value2'
// })

/**
*处理服务器的响应数据
*上面的例子演示了如何发起请求。很多情况下，你还需要处理服务器回复的数据。
*网络请求天然是一种异步操作（译注：同样的还有asyncstorage，请不要再问怎样把异步变成同步！无论在语法层面怎么折腾，它们的异步本质是无法变更的。
*异步的意思是你应该趁这个时间去做点别的事情，比如显示loading，而不是让界面卡住傻等）。
*Fetch 方法会返回一个Promise，这种模式可以简化异步风格的代码（译注：同样的，如果你不了解promise，建议使用搜索引擎补课）：
*/
  // getMoviesFromApiAsync() {
  //   return fetch('https://facebook.github.io/react-native/movies.json')
  //     .then((response) => response.json())
  //     .then((responseJson) => {
  //       return responseJson.movies;
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }
// 你也可以在React Native应用中使用ES7标准中的async/await 语法：

  // 注意这个方法前面有async关键字
  // async getMoviesFromApi() {
  //   try {
  //     // 注意这里的await语句，其所在的函数必须有async关键字声明
  //     let response = await fetch('https://facebook.github.io/react-native/movies.json');
  //     let responseJson = await response.json();
  //     return responseJson.movies;
  //   } catch(error) {
  //     console.error(error);
  //   }
  // }
/**
*别忘了catch住fetch可能抛出的异常，否则出错时你可能看不到任何提示。
*默认情况下，iOS会阻止所有非https的请求。如果你请求的接口是http协议，那么首先需要添加一个App Transport Security。
*使用其他的网络库
*React Native中已经内置了XMLHttpRequest API(也就是俗称的ajax)。一些基于XMLHttpRequest封装的第三方库也可以使用，例如frisbee或是axios等。但注意不能使用jQuery，因为jQuery中还使用了很多浏览器中才有而RN中没有的东西（所以也不是所有web中的ajax库都可以直接使用）。
*/
// var request = new XMLHttpRequest();
// request.onreadystatechange = (e) => {
//   if (request.readyState !== 4) {
//     return;
//   }
//
//   if (request.status === 200) {
//     console.log('success', request.responseText);
//   } else {
//     console.warn('error');
//   }
// };
//
// request.open('GET', 'https://mywebsite.com/endpoint/');
// request.send();

/*需要注意的是，安全机制与网页环境有所不同：在应用中你可以访问任何网站，没有跨域的限制。
*WebSocket支持
*React Native还支持WebSocket，这种协议可以在单个TCP连接上提供全双工的通信信道。
*/

// var ws = new WebSocket('ws://host.com/path');
//
// ws.onopen = () => {
//   // 打开一个连接
//   ws.send('something'); // 发送一个消息
// };
// ws.onmessage = (e) => {
//   // 接收到了一个消息
//   console.log(e.data);
// };
// ws.onerror = (e) => {
//   // 发生了一个错误
//   console.log(e.message);
// };
// ws.onclose = (e) => {
//   // 连接被关闭了
//   console.log(e.code, e.reason);
// };
// 现在你的应用已经可以从各种渠道获取数据了，那么接下来面临的问题多半就是如何在不同的页面间组织和串联内容了。



/**
*如果要渲染的是一组需要分组的数据，也许还带有分组标签的，那么SectionList将是个不错的选择.
*/
//
// export default class SectionListDown extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render(){
//     return(
//       <View style = {styles.container}>
//         <SectionList
//           sections = {[
//             {title:'D',data: ['devin']},
//             {title:'J',data: ['jj','jim','jio','jsc']},
//           ]}
//           renderItem= {({item}) => <Text style = {styles.item}> {item} </Text> }
//           renderSectionHeader = {({section}) => <Text style = {styles.sectionHeader}> {section.title} </Text>}
//         />
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container:{
//     flex:1,
//     paddingTop:44,
//     backgroundColor:'skyblue',
//   },
//   sectionHeader:{
//     paddingTop: 2,
//     paddingLeft: 10,
//     paddingRight: 10,
//     paddingBottom: 2,
//     fontSize: 20,
//     fontWeight: 'bold',
//     backgroundColor: 'rgba(247,247,247,1.0)',
//   },
//   item:{
//     padding:20,
//     fontSize:10,
//     height:40,
//     backgroundColor:'white'
//   },
// })

/**
*如何使用长列表
*React Native提供了几个适用于展示长列表数据的组件，一般而言我们会选用FlatList或是SectionList。
*FlatList组件用于显示一个垂直的滚动列表，其中的元素之间结构近似而仅数据不同。
*FlatList更适于长列表数据，且元素个数可以增删。和ScrollView不同的是，FlatList并不立即渲染所有元素，而是优先渲染屏幕上可见的元素。
*FlatList组件必须的两个属性是data和renderItem。data是列表的数据源，而renderItem则从数据源中逐个解析数据，然后返回一个设定好格式的组件来渲染。
*/
// export default class FlatListDown extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render(){
//     return(
//       <View style={styles.container}>
//         <FlatList
//           data = {[
//             {key:'devi'},
//             {key:'joh'},
//             {key:'foro'},
//             {key:'jim'},
//             {key:'varea'},
//             {key:'fire'},
//           ]}
//           renderItem={({item}) => <Text style={styles.item}> {item.key} </Text>}
//         />
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container:{
//     flex:1,
//     paddingTop:22,
//     height:300,
//     backgroundColor:'powderblue',
//   },
//   item:{
//     padding:10,
//     fontSize:18,
//     height:44,
//     backgroundColor:'skyblue',
//   },
// })



// import React, { Component } from 'react';
// import {AppRegistry,ScrollView,StyleSheet,Text,TextInput,View,Image} from 'react-native';
/**
*使用滚动视图
*
*ScrollView是一个通用的可滚动的容器，你可以在其中放入多个组件和视图，而且这些组件并不需要是同类型的。
*ScrollView不仅可以垂直滚动，还能水平滚动（通过horizontal属性来设置）。
*/
// export default class ScrollViewDown extends Component{
//   constructor(props) {
//     super(props);
//   }
//   render(){
//     return(
//       <ScrollView>
//         <Text style={{fontSize:26}}>scroll me</Text>
//         <Image source={require('./image/active.png')} style={{width:50,height:50}} />
//         <Text style={{fontSize:26}}>you like</Text>
//         <Image source={require('./image/active.png')} style={{width:50,height:50}} />
//         <Text style={{fontSize:26}}>scroll down</Text>
//         <Image source={require('./image/guide_ignore.png')} />
//         <Text style={{fontSize:26}}>React Native</Text>
//         <Image source={require('./image/guide_ignore.png')} />
//       </ScrollView>
//     );
//   }
// }



/**
*处理文本输入
*TextInput是一个允许用户输入文本的基础组件。
*它有一个名为onChangeText的属性，此属性接受一个函数，而此函数会在文本变化时被调用。
*另外还有一个名为onSubmitEditing的属性，会在文本被提交后（用户按下软键盘上的提交键）调用。
*/
// export default class pizzaTranslate extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {text: ''};
//   }
//   render(){
//     return(
//       <View style={{padding:10}}>
//         <TextInput
//         style={{height:40}}
//         placeholder="Type here to translate"
//         onChangeText={(text)=>this.setState({text})}/>
//         <Text style={{padding: 10, fontSize: 42}}>
//             {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
//         </Text>
//       </View>
//     );
//   }
// }

/**
*Align Items
*
*在组件的style中指定alignItems可以决定其子元素沿着次轴（与主轴垂直的轴，比如若主轴方向为row，则次轴方向为column）的排列方式。
*子元素是应该靠近次轴的起始端还是末尾段分布呢？亦或应该均匀分布？对应的这些可选项有：flex-start、center、flex-end以及stretch。
*
*注意：要使stretch选项生效的话，子元素在次轴方向上不能有固定的尺寸。
*以下面的代码为例：只有将子元素样式中的width: 50去掉之后，alignItems: 'stretch'才能生效。
*/

// export default class  alignItems extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render(){
//       return(
//         <View style={{
//           flex:1,
//           flexDirection:'row',
//           justifyContent:'center',
//           alignItems:'center',
//         }}>
//           <View style={{width:50,height:50,backgroundColor:'steelblue'}}/>
//           <View style={{width:50,height:50,backgroundColor:'powderblue'}}/>
//           <View style={{width:50,height:50,backgroundColor:'skyblue'}}/>
//         </View>
//       );
//   }
// }

/**
*Justify Content
*
*在组件的style中指定justifyContent可以决定其子元素沿着主轴的排列方式。
*子元素是应该靠近主轴的起始端还是末尾段分布呢？亦或应该均匀分布？
*对应的这些可选项有：flex-start、center、flex-end、space-around以及space-between。
*/

// export default class justifyContent extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render(){
//     return(
//       // 尝试把`justifyContent`改为`center`看看
//       // 尝试把`flexDirection`改为`row`看看
//
//       <View style = {{
//         flex:1,
//         flexDirection:'column',
//         justifyContent:'space-between',
//       }}>
//         <View style={{width:50,height:50,backgroundColor:'steelblue'}}/>
//         <View style={{width:50,height:50,backgroundColor:'powderblue'}}/>
//         <View style={{width:50,height:50,backgroundColor:'skyblue'}}/>
//       </View>
//     );
//   }
// }

/**
*使用Flexbox布局
*/
// 一般来说，使用flexDirection、alignItems和 justifyContent三个样式属性就已经能满足大多数布局需求

// export default class flexDirectionBasic extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render(){
//     return(
//       <View style={{flex: 1, flexDirection: 'column'}}>
//         <View style={{width:50,height:50,backgroundColor:'powderblue'}}/>
//         <View style={{width:50,height:50,backgroundColor:'skyblue'}}/>
//         <View style={{width:50,height:50,backgroundColor:'steelblue'}}/>
//       </View>
//     );
//   }
// }
// AppRegistry.registerComponent('RNProject',()=>flexDirectionBasic);

/**
*弹性（Flex）宽高#
*/
// export default class FlexBasic extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render(){
//     return(
//       <View style={{flex:1}}>
//         <View style={{flex:2 ,backgroundColor:'skyblue'}} />
//         <View style={{flex:3 ,backgroundColor:'powderblue'}} />
//         <View style={{flex:4 ,backgroundColor:'steelblue'}} />
//       </View>
//     );
//   }
// }
// AppRegistry.registerComponent('RNProject',()=>FlexBasic);

/**
*高度与宽度
*/
// export default class FixedWidthAndHeight extends Component{
//   render(){
//     return (
//       <View>
//         <View style={{top:100,width: 50, height: 50, backgroundColor: 'gray'}} />
//         <View style={{top:500,left:200, width: 100, height: 100, backgroundColor: 'red'}} />
//       </View>
//     );
//   }
// };
//
// AppRegistry.registerComponent('RNProject',()=>FixedWidthAndHeight);

/**
* 样式 style
*/
// export default class LotsOfStyles extends Component {
// 	render() {
// 		return(
// 			<View style={{width:300,height:500,backgroundColor:'gray'}}>
// 				    <Text style={styles.red}> just red</Text>
// 				    <Text style={styles.bigBlue}> just bigBlue</Text>
//         		<Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
// 		        <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
// 			</View>
// 		);
// 	}
// }
//
// const styles = StyleSheet.create({
// 	bigBlue:{
// 		color:'blue',
// 		fontSize:30,
// 		fontWeight:'bold',
// 	},
// 	red:{
// 		color:'red',
// 	},
// });
//
// AppRegistry.registerComponent('LotsOfGreetings',()=>LotsOfStyles);

/**
*State 状态
*/

// class Blink extends Component {
// 	constructor(props){
// 		super(props);
// 		this.state = {showText:true};

// 		setInterval(()=>{
// 			this.setState(previousState =>{
// 				return {showText: !previousState};
// 			});
// 		},1000);
// 	}
// 	render(){
// 		let display = this.state.showText ? this.props.text :' ';
// 		return(
// 			<Text> {display} </Text>
// 		);
// 	}
// }

// export default class extends Component {
// 	render(){
// 		return(
// 			<View >
// 				<Blink text='I Love You' />
// 				<Blink text='Yes blinking is so great' />
// 				<Blink text='Why did they ever take this out of HTML' />
// 			</View>
// 		);
// 	}
// }


/**
*自定义的组件
*/
// class Greeting extends Component {
// 	render() {
// 		return (
// 			<Text>Hello {this.props.name}!</Text>
// 		);
// 	}
// }

// export default class LotsOfGreetings extends Component {
//   render() {
//     return (
//       <View style={{alignItems: 'center'}}>
//         <Greeting name='Rexxar' />
//         <Greeting name='Jaina' />
//         <Greeting name='Valeera' />
//       </View>
//     );
//   }
// }

/**
*Image Props
*/
// export default class  Bananas extends Component {
// 	render(){
// 		let pic = {
// 			uri: 'https://m.baidu.com/static/index/plus/plus_logo.png'
// 		};
// 		return (
// 			<Image source={pic} style={{width: 193, height: 110}}/>
// 			);
// 	}
// }

/**
*HelloWorldApp
*/
// export default class HelloWorldApp extends Component {
//   render() {
//     return (
//       <Text>Hello world!</Text>
//     );
//   }
// }
