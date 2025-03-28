import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, ScrollView, TextInput, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import styles from './styles';
import PrimaryButton from '../../componets/PrimaryButton';
import { Colors } from '../../styles';
import CustomRBSheet from '../../componets/CustomRBSheet';

const EditAccountInfoScreen = () => {
  const refLogoutSheet = useRef(null);
  const refRBSheet = useRef(null);
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setUserData({
        firstName: 'Ayomide',
        lastName: 'Usman',
        email: 'ayomideusman606@yahoo.com',
        dob: '10 January 1999',
        phone: '',
      });
      setLoading(false);
    }, 2000);
  }, []);

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      refRBSheet.current.close()
    }, 2000);

  };

  const openSheet = () => {
    setTimeout(() => {
      refLogoutSheet.current?.open();
      
    }, 100);
  };


  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Edit account info</Text>
        <TouchableOpacity>
          <Text style={styles.saveText}>Save</Text>
        </TouchableOpacity>
      </View>

      {/* Name Section */}
      <View style={styles.rowContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>First Name</Text>
          {loading ? (
            <SkeletonPlaceholder >
              <View style={styles.skeletonText} />
            </SkeletonPlaceholder>
          ) : (
            <Text style={styles.textValue}>{userData.firstName}</Text>
          )}
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Last Name</Text>
          {loading ? (
            <SkeletonPlaceholder>
              <View style={styles.skeletonText} />
            </SkeletonPlaceholder>
          ) : (
            <Text style={styles.textValue}>{userData.lastName}</Text>
          )}
        </View>
      </View>

      {/* Email Section */}
      <View style={styles.section}>
        <Text style={styles.label}>Email Address</Text>
        <View style={styles.label_below}>
          <View>
            {loading ? (
              <SkeletonPlaceholder>

                <View style={styles.skeletonText} />
              </SkeletonPlaceholder>
            ) : (
              <Text style={styles.textValue}>{userData.email}</Text>
            )}
            {loading ? (
              <SkeletonPlaceholder>
                <View style={styles.skeletonText} />
              </SkeletonPlaceholder>
            ) : (
              <Text style={styles.verifyText}>Verify email address</Text>
            )}
          </View>
          {!loading && (
            <TouchableOpacity
              onPress={() => navigation.navigate('VerfiEmail', {
                emailID: userData?.email
              })}
              style={styles.editButton}>
              <Text style={styles.editButtonText}>Edit</Text>
            </TouchableOpacity>
          )}

        </View>
      </View>

      {/* Date of Birth Section */}
      <View style={styles.section}>
        <Text style={styles.label}>Date of Birth (DOB)</Text>
        <View style={styles.label_below}>

          {loading ? (
            <SkeletonPlaceholder>
              <View style={styles.skeletonText} />
            </SkeletonPlaceholder>
          ) : (
            <Text style={styles.textValue}>{userData.dob}</Text>
          )}
          {!loading && (
            <TouchableOpacity onPress={() => refRBSheet.current.open()}
              style={styles.editButton}>
              <Text style={styles.editButtonText}>Edit</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Phone number</Text>
        <View style={styles.label_below}>
          {loading ? (
            <SkeletonPlaceholder>
              <View style={styles.skeletonText} />
            </SkeletonPlaceholder>
          ) : (
            <Text style={styles.textValue}>
              {userData?.phone?.trim() ? userData.phone : 'No phone number entered yet'}
            </Text>
          )}
          {!loading && (
            <TouchableOpacity style={styles.addButton}>
              <Text style={styles.addButtonText}>
                {userData?.phone?.trim() ? 'Edit' : 'Add'}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>


      {/* Change Password Section */}
      <View style={styles.section}>
        <Text style={styles.label}>Change Password</Text>
        <View style={styles.label_below}>
          {loading ? (
            <SkeletonPlaceholder>
              <View style={styles.skeletonText} />
            </SkeletonPlaceholder>
          ) : (
            <Text style={styles.textHint}>Looking to change your {'\n'}current password?</Text>
          )}
          {!loading && (
            <TouchableOpacity

              onPress={() => navigation.navigate('ChangePassword')}
              style={styles.changeButton}>
              <Text style={styles.changeButtonText}>Change</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* Logout & Delete Account */}
      <TouchableOpacity
        onPress={openSheet}
        style={styles.logoutButton}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.deleteText}>Delete your account</Text>
      </TouchableOpacity>
      <CustomRBSheet ref={refLogoutSheet} 
      content='low'
      title="Are you sure you want to sign out?">
        <TouchableOpacity
          onPress={() => console.log("Signing Out")}
          style={{
            // backgroundColor: "#FF3B30",
            width: "90%",
            paddingVertical: 12,
            borderRadius: 25,
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "500", color: Colors.INPUT_TEXTCOLOR }}>Sign Out</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => refLogoutSheet.current.close()}
          style={{
            backgroundColor: "#F8F6FC",
            width: "90%",
            paddingVertical: 12,
            borderRadius: 25,
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "500", color: "#000" }}>Cancel</Text>
        </TouchableOpacity>
      </CustomRBSheet>

      <CustomRBSheet
        ref={refRBSheet}
      content='medium'

        title=' Tell us your birth date'>
        {/* Balloon Image */}
        <Image
          source={require("../../assets/images/balloon.png")}
          style={{ width: 50, height: 50, marginVertical: 10 }}
          resizeMode="contain"
        />

        {/* Description */}
        <Text style={{ textAlign: "center", color: "#666", marginBottom: 15 }}>
          We request this information to provide you with a more personalized experience.
        </Text>

        {/* Date of Birth Fields */}
        <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
          <TextInput
            style={styles.input}
            placeholder="Day"
            keyboardType="numeric"
            maxLength={2}
            value={day}
            onChangeText={setDay}
          />
          <TextInput
            style={styles.input}
            placeholder="Month"
            keyboardType="numeric"
            maxLength={2}
            value={month}
            onChangeText={setMonth}
          />
          <TextInput
            style={styles.input}
            placeholder="Year"
            keyboardType="numeric"
            maxLength={4}
            value={year}
            onChangeText={setYear}
          />
        </View>
        <PrimaryButton
          title="Submit"
          onPress={handleSubmit}
          loading={loading}
          textColor="white"
          customStyle={{
            opacity: loading ? 0.5 : 1,
            backgroundColor: Colors.PRIMARY,
            alignSelf: 'center',
            width: '100%',
            marginTop: 20,

          }}
        />

        {/* Not Now Option */}
        <TouchableOpacity onPress={() => refRBSheet.current.close()}>
          <Text style={styles.notNowText}>Not Now</Text>
        </TouchableOpacity>
      </CustomRBSheet>
    </ScrollView>
  );
};

export default EditAccountInfoScreen;
