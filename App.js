// import React, {Fragment} from 'react';
// import {
//   StyleSheet,
//   View,
//   Text,
//   TouchableOpacity,
//   TextInput,
// } from 'react-native';

// const App = () => {
//   return (
//     <View style={styles.root}>
//       <View style={styles.form}>
//         <Text style={styles.text}>Welcome{"\n"}to Gather</Text>

//         <View style={styles.inputs}>
//           <View style={styles.textInput}>
//             <View style={{width: 40, height: 40, backgroundColor: 'grey'}} />

//             <TextInput
//               label='Email'
//               placeholder="Email"
//               placeholderTextColor="grey" 
//               style={styles.inputStyle}
//             />
//           </View>

//           <View style={styles.textInput}>
//             <View style={{width: 40, height: 40, backgroundColor: 'grey'}} />

//             <TextInput
//               label='Password'
//               placeholder="Password"
//               placeholderTextColor="grey" 
//               secureTextEntry={true}
//               style={styles.inputStyle}
//             />
//           </View>
//         </View>

//         <View style={styles.buttons}>
//           <TouchableOpacity onPress={() => {}}>
//             <View style={styles.loginButton}>
//               <Text style={styles.loginText}>L O G I N</Text>
//             </View>
//           </TouchableOpacity>


//           <TouchableOpacity onPress={() => {}}>
//             <Text style={styles.registerText}>New here? Sign up now</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   root: {
//     flex: 1,
//     backgroundColor: "rgba(19,15,64,1)"
//   },
//   form: {
//     justifyContent: "space-evenly",
//     margin: 30,
//     flex: 1,
//   },
//   text: {
//     color: "white",
//     fontSize: 40,
//     fontWeight: "bold"
//   },
//   loginButton: {
//     borderWidth: 3,
//     borderRadius: 100,
//     borderColor: "rgba(249,127,81,1)",
//   },
//   loginText: {
//     paddingHorizontal: 30,
//     paddingVertical: 10, 
//     color: "rgba(249,127,81,1)",
//     fontWeight: "bold",
//     fontSize: 14,
//   },
//   registerText: {
//     color: "grey",
//     fontSize: 14,
//   },
//   buttons: {
//     height: 100,
//     justifyContent: "space-between",
//     flexDirection: "column",
//     alignItems: "center",
//   },
//   inputs: {
//     height: 100,
//     justifyContent: "space-between",
//     marginBottom: 50,
//     marginTop: 50,
//   },
//   textInput: {
//     flexDirection: "row"
//   },
//   inputStyle: {
//     color: "grey",
//     alignSelf: "stretch",
//     marginLeft: 16,
//     paddingTop: 14,
//     paddingRight: 5,
//     paddingBottom: 8,
//     borderColor: "grey",
//     borderBottomWidth: 1,
//     flex: 1
//   }
// });

// export default App;








// import React, {Fragment} from 'react';
// import {
//   StyleSheet,
//   View,
//   Text,
//   ScrollView,
// } from 'react-native';
// import EventCard from './EventCard';

// const App = () => {
//   return (
//     <View style={styles.root}>
//       <Text style={styles.text}>Hello,{"\n"}Sunn413</Text>

//       <View>
//         <Text style={styles.smallerText}>You will have...</Text>
        
//         <View style={{height: 120}}>
//           <ScrollView
//             horizontal={true}
//             showsHorizontalScrollIndicator={false}
//           >
//             <EventCard activity="Hang Out" days="03"/>
//             <EventCard activity="Kill People" days="05"/>
//             <EventCard activity="Hang Out" days="03"/>
//             <EventCard activity="Hang Out" days="03"/>
//             <EventCard activity="Hang Out" days="03"/>
//             <EventCard activity="Hang Out" days="03"/>
//           </ScrollView>
//         </View>
//       </View>

//       <View>
//         <Text style={styles.smallerText}>With...</Text>
        
//         <View style={{height: 120}}>
//           <ScrollView
//             horizontal={true}
//             showsHorizontalScrollIndicator={false}
//           >
//             <View style={{width: 80, height: 80, backgroundColor: 'grey', borderRadius: 200, marginHorizontal: 10}} />
//             <View style={{width: 80, height: 80, backgroundColor: 'grey', borderRadius: 200, marginHorizontal: 10}} />
//             <View style={{width: 80, height: 80, backgroundColor: 'grey', borderRadius: 200, marginHorizontal: 10}} />
//             <View style={{width: 80, height: 80, backgroundColor: 'grey', borderRadius: 200, marginHorizontal: 10}} />
//           </ScrollView>
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   root: {
//     paddingTop: 50,
//     flex: 1,
//     backgroundColor: "rgba(19,15,64,1)",
//     justifyContent: "space-evenly",
//   },
//   text: {
//     marginHorizontal: 30,
//     color: "white",
//     fontSize: 40,
//     fontWeight: "bold"
//   },
//   smallerText: {
//     marginHorizontal: 30,
//     marginVertical: 20,
//     color: "white",
//     fontSize: 14,
//     fontWeight: "bold"
//   },
// });

// export default App;








// import React, {Fragment} from 'react';
// import {
//   StyleSheet,
//   View,
//   Text,
//   ScrollView,
//   TouchableOpacity,
// } from 'react-native';
// import Event from './Event';

// const App = () => {
//   return (
//     <View style={styles.root}>
//       <View style={styles.form}>
//         <Text style={styles.text}>List{"\n"}of Events</Text>

//         <View style={{height: 300}}>
//           <ScrollView>
//             <Event activity="Hang Out" date="25 July 2019" days="3"/>
//             <Event activity="Hang Out" date="25 July 2019" days="3"/>
//             <Event activity="Hang Out" date="25 July 2019" days="3"/>
//             <Event activity="Hang Out" date="25 July 2019" days="3"/>
//             <Event activity="Hang Out" date="25 July 2019" days="3"/>
//             <Event activity="Hang Out" date="25 July 2019" days="3"/>
//             <Event activity="Hang Out" date="25 July 2019" days="3"/>
//             <Event activity="Hang Out" date="25 July 2019" days="3"/>
//           </ScrollView>
//         </View>

//         <View style={styles.buttons}>
//           <TouchableOpacity onPress={() => {}}>
//             <View style={styles.createButton}>
//               <Text style={styles.createText}>C R E A T E</Text>
//             </View>
//           </TouchableOpacity>
//         </View>

//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   root: {
//     paddingTop: 50,
//     flex: 1,
//     backgroundColor: "rgba(19,15,64,1)",
//   },
//   form: {
//     justifyContent: "space-between",
//     margin: 30,
//     flex: 1,
//   },
//   text: {
//     color: "white",
//     fontSize: 40,
//     fontWeight: "bold"
//   },
//   buttons: {
//     flexDirection: "column",
//     alignItems: "center",
//   },
//   createButton: {
//     borderWidth: 3,
//     borderRadius: 100,
//     borderColor: "rgba(249,127,81,1)",
//   },
//   createText: {
//     paddingHorizontal: 30,
//     paddingVertical: 10, 
//     color: "rgba(249,127,81,1)",
//     fontWeight: "bold",
//     fontSize: 14,
//   },
// });

// export default App;







// import React, {Fragment} from 'react';
// import {
//   StyleSheet,
//   View,
//   Text,
//   ScrollView,
//   TouchableOpacity,
// } from 'react-native';
// import Event from './Event';

// const App = () => {
//   return (
//     <View style={styles.root}>
//       <View style={styles.form}>
//         <Text style={styles.text}>List{"\n"}of Events</Text>

//         <View style={{height: 300}}>
//           <ScrollView>
//             <Event activity="Hang Out" date="25 July 2019" days="3"/>
//             <Event activity="Hang Out" date="25 July 2019" days="3"/>
//             <Event activity="Hang Out" date="25 July 2019" days="3"/>
//             <Event activity="Hang Out" date="25 July 2019" days="3"/>
//             <Event activity="Hang Out" date="25 July 2019" days="3"/>
//             <Event activity="Hang Out" date="25 July 2019" days="3"/>
//             <Event activity="Hang Out" date="25 July 2019" days="3"/>
//             <Event activity="Hang Out" date="25 July 2019" days="3"/>
//           </ScrollView>
//         </View>

//         <View style={styles.buttons}>
//           <TouchableOpacity onPress={() => {}}>
//             <View style={styles.createButton}>
//               <Text style={styles.createText}>C R E A T E</Text>
//             </View>
//           </TouchableOpacity>
//         </View>

//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   root: {
//     paddingTop: 50,
//     flex: 1,
//     backgroundColor: "rgba(19,15,64,1)",
//   },
//   form: {
//     justifyContent: "space-between",
//     margin: 30,
//     flex: 1,
//   },
//   text: {
//     color: "white",
//     fontSize: 40,
//     fontWeight: "bold"
//   },
//   buttons: {
//     flexDirection: "column",
//     alignItems: "center",
//   },
//   createButton: {
//     borderWidth: 3,
//     borderRadius: 100,
//     borderColor: "rgba(249,127,81,1)",
//   },
//   createText: {
//     paddingHorizontal: 30,
//     paddingVertical: 10, 
//     color: "rgba(249,127,81,1)",
//     fontWeight: "bold",
//     fontSize: 14,
//   },
// });

// export default App;







import React, {Fragment} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const App = () => {
  return (
    <View style={styles.root}>
      <View style={styles.form}>
        <Text style={styles.text}>Welcome{"\n"}to Gather</Text>

        <View style={styles.inputs}>
          <View style={styles.textInput}>
            <View style={{width: 40, height: 40, backgroundColor: 'grey'}} />

            <TextInput
              label='Username'
              placeholder="Username"
              placeholderTextColor="grey" 
              style={styles.inputStyle}
            />
          </View>
          
          <View style={styles.textInput}>
            <View style={{width: 40, height: 40, backgroundColor: 'grey'}} />

            <TextInput
              label='Email'
              placeholder="Email"
              placeholderTextColor="grey" 
              style={styles.inputStyle}
            />
          </View>

          <View style={styles.textInput}>
            <View style={{width: 40, height: 40, backgroundColor: 'grey'}} />

            <TextInput
              label='Password'
              placeholder="Password"
              placeholderTextColor="grey" 
              secureTextEntry={true}
              style={styles.inputStyle}
            />
          </View>
        </View>

        <View style={styles.buttons}>
          <TouchableOpacity onPress={() => {}}>
            <View style={styles.loginButton}>
              <Text style={styles.loginText}>L O G I N</Text>
            </View>
          </TouchableOpacity>


          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.registerText}>New here? Sign up now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgba(19,15,64,1)"
  },
  form: {
    justifyContent: "space-evenly",
    margin: 30,
    flex: 1,
  },
  text: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold"
  },
  loginButton: {
    borderWidth: 3,
    borderRadius: 100,
    borderColor: "rgba(249,127,81,1)",
  },
  loginText: {
    paddingHorizontal: 30,
    paddingVertical: 10, 
    color: "rgba(249,127,81,1)",
    fontWeight: "bold",
    fontSize: 14,
  },
  registerText: {
    color: "grey",
    fontSize: 14,
  },
  buttons: {
    height: 100,
    justifyContent: "space-between",
    flexDirection: "column",
    alignItems: "center",
  },
  inputs: {
    justifyContent: "space-between",
  },
  textInput: {
    flexDirection: "row",
    marginVertical: 5,
  },
  inputStyle: {
    color: "grey",
    alignSelf: "stretch",
    marginLeft: 16,
    paddingTop: 14,
    paddingRight: 5,
    paddingBottom: 8,
    borderColor: "grey",
    borderBottomWidth: 1,
    flex: 1
  }
});

export default App;











