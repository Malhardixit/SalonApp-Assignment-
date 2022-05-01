import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Title, Card, Divider} from 'react-native-paper';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const {height, width} = Dimensions.get('window');

const Product = props => {
  const {user, image, key, address, reviews, time, weekend} =
    props.route.params.item;

  return (
    <View style={styles.root}>
      <StatusBar backgroundColor="white" />
      <Image style={styles.img} source={{uri: image}} />
      <View style={{marginTop: -100, marginLeft: 10}}>
        <Title style={styles.titleTxt}>{user}</Title>
        <Text style={styles.txt}>{address}</Text>
      </View>
      <View style={{flexDirection: 'row', marginLeft: 10}}>
        {[...Array(5)].map((e, i) => (
          <MaterialCommunityIcon
            key={i}
            style={{color: 'gold', marginRight: 2}}
            size={20}
            name="star"
          />
        ))}
      </View>
      <View style={styles.aboutContainer}>
        <Title style={styles.abtHeader}>About</Title>
        <Divider
          style={{
            borderWidth: 0.2,
            marginLeft: -10,
            marginTop: 5,
            borderColor: 'black',
          }}
        />
        <Text style={styles.abt}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere ut et
          molestiae perferendis quibusdam delectus distinctio quisquam dolorum
        </Text>
        <Divider style={{borderWidth: 0.2, marginLeft: -10, marginTop: 12}} />
        <Title style={{fontSize: 20, fontFamily: 'Poppins-SemiBold'}}>
          Opening Hours
        </Title>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Text style={[styles.day, {marginLeft: -30}]}>Monday-Friday</Text>
          <Text style={styles.day}>Saturday-Sunday</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Text style={[styles.time, {marginLeft: -20}]}>{time}</Text>
          <Text style={styles.time}>{weekend}</Text>
        </View>
        <Divider style={{borderWidth: 0.2, marginLeft: -10, marginTop: 20}} />
        <Title style={{fontSize: 20, fontFamily: 'Poppins-SemiBold'}}>
          Location
        </Title>
        <Text style={{color: 'black', fontSize: 15, marginTop: -4}}>
          {address}
        </Text>

        <TouchableOpacity>
          <View style={styles.btn}>
            <Text style={styles.bookTxt}>Book Appointment</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  img: {
    width: width,
    height: height / 2,
  },
  txt: {
    fontSize: 15,
    fontWeight: '500',
    color: 'white',
  },
  myCard: {
    margin: 3,
  },
  titleTxt: {
    color: 'white',
    fontFamily: 'Poppins-SemiBold',
  },
  abt: {
    color: 'black',
    fontSize: 15,
    fontFamily: 'Poppins - Black',
    padding: 4,
  },
  aboutContainer: {
    marginTop: 20,
    marginLeft: 10,
    flex: 1,
  },
  abtHeader: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
  },
  day: {
    color: 'black',
    fontSize: 16,
    fontWeight: '300',
    paddingTop: 2,
  },
  time: {
    color: 'black',
    fontSize: 18,

    color: '#f0759a',
  },
  btn: {
    backgroundColor: '#f0759a',
    height: height / 12,
    width: width - 10,
    borderRadius: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginRight: 10,
  },
  bookTxt: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
  },
});
