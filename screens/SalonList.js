import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  StatusBar,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import {Searchbar} from 'react-native-paper';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {USERS} from '../data/data';

const {height, width} = Dimensions.get('window');
const IMGS_SIZE = 70;
const ITEM_SIZE = IMGS_SIZE + SPACING * 3;
const SPACING = 20;

const SalonList = ({navigation}) => {
  const renderList = item => {
    return (
      <TouchableOpacity
        activeOpacity={10}
        onPress={() => navigation.navigate('Product', {item})}>
        <View style={styles.parent}>
          <StatusBar backgroundColor="white" />
          <Image source={{uri: item.image}} style={styles.img} />
          <View>
            <Text style={styles.txtUser}>{item.user}</Text>
            <Text style={styles.txtAddress}>
              {item.address.length > 11
                ? item.address.slice(0, 30).toLowerCase() + ' ... '
                : item.address.length.toLowerCase()}
            </Text>
            <View style={{flexDirection: 'row'}}>
              <MaterialCommunityIcon
                style={{color: 'gold', marginRight: 2}}
                size={20}
                name="star"
              />
              <Text style={styles.reviews}>{item.reviews} </Text>
            </View>
            <Text style={styles.time}>{item.time}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const [search, setSearch] = useState('');

  return (
    <View style={{flex: 1}}>
      <Text style={styles.txt}>Salon Nearby</Text>
      <Searchbar
        style={styles.search}
        value={search}
        icon={() => (
          <MaterialCommunityIcon name="magnify" size={30} style={styles.icon} />
        )}
        placeholder="Search for nearby salon"
        onChangeText={e => {
          setSearch(e);
        }}
      />
      <FlatList
        contentContainerStyle={styles.list}
        data={USERS.filter(val => {
          if (search == '') {
            return val;
          } else if (val.user.toLowerCase().includes(search.toLowerCase())) {
            return val;
          }
        })}
        keyExtractor={item => item.key}
        renderItem={({item, index}) => {
          return renderList(item);
        }}
      />
    </View>
  );
};

export default SalonList;

const styles = StyleSheet.create({
  parent: {
    flexDirection: 'row',
    padding: SPACING,
    marginBottom: SPACING / 2,
    backgroundColor: 'white',
    elevation: 10,
    borderRadius: 12,
    //transform: [{scale}],
  },
  img: {
    height: IMGS_SIZE,
    width: IMGS_SIZE,
    borderRadius: IMGS_SIZE,
    marginRight: SPACING / 2,
    alignSelf: 'center',
  },
  txtUser: {
    color: 'black',
    fontSize: 22,
    fontFamily: 'Poppins-SemiBold',
    // fontWeight: '700',
  },
  txtAddress: {
    color: 'black',
    fontSize: 14,
    //width: width - IMGS_SIZE - SPACING * 2,
    width: width / 1.5,
    opacity: 0.7,
    marginTop: -5,
  },
  list: {
    padding: SPACING / 2,
    paddingTop: 10,
    backgroundColor: 'white',
  },
  bgImg: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    height: height / 3,
    width: width,
  },
  txt: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'sans-serif-condensed',
    padding: 5,
  },
  search: {
    color: 'black',
    height: height / 12,
    width: 400,
    marginBottom: 10,
    marginLeft: 5,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 0.5,
    borderRadius: 10,
  },
  icon: {
    marginLeft: 5,
    color: 'black',
  },
  time: {
    color: 'black',
    fontSize: 14,
    marginLeft: 5,
  },
  reviews: {
    color: 'black',
    fontSize: 14,
    fontWeight: '500',
  },
});
