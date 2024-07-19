import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign, Entypo, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Help() {
const navigation = useNavigation()
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <View style={styles.headerView}>
          <TouchableOpacity onPress={()=>navigation.goBack()}>
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
          <View style={styles.headerText}>
            <Text style={styles.headerTitle}>Help</Text>
          </View>
          <TouchableOpacity>
            <Entypo name="dots-three-vertical" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.bodyView}>
          <Text style={styles.bodyText}>Popular help resources</Text>
          <View style={styles.bodyHelp}>
            <TouchableOpacity style={styles.helpItem}>
              <View style={styles.circleIcon}>
                <Ionicons name="document-text-outline" size={24} color="blue" />
              </View>
              <Text style={styles.bodyHelpText}>How to use the Keep Note app</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.helpItem}>
              <View style={styles.circleIcon}>
                <Ionicons name="document-text-outline" size={24} color="blue" />
              </View>
              <Text style={styles.bodyHelpText}>Fix problems with keep notes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.helpItem}>
              <View style={styles.circleIcon}>
                <Ionicons name="document-text-outline" size={24} color="blue" />
              </View>
              <Text style={styles.bodyHelpText}>Export your data from keep notes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.helpItem}>
              <View style={styles.circleIcon}>
                <Ionicons name="document-text-outline" size={24} color="blue" />
              </View>
              <Text style={styles.bodyHelpText}>Create or edit a note</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.helpItem}>
              <View style={styles.circleIcon}>
                <Ionicons name="document-text-outline" size={24} color="blue" />
              </View>
              <Text style={styles.bodyHelpText}>Archive notes & lists</Text>
            </TouchableOpacity>
            <View style={styles.searchContainer}>
              <Ionicons name="search-outline" size={24} color="black" />
              <TextInput
                style={styles.searchInput}
                placeholder="Search help"
              />
            </View>
          </View>
          <View style={styles.bodyFeedback}>
            <TouchableOpacity style={styles.feedbackItem}>
              <View style={styles.circleIcon}>
                <MaterialCommunityIcons name="message-alert-outline" size={24} color="black" />
              </View>
              <Text style={styles.feedbackText}>Send feedback</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    flex: 1,
    paddingHorizontal: 16,
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
  },
  headerText: {
    flex: 1,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  bodyView: {
    flex: 1,
    marginTop: 16,
  },
  bodyText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  bodyHelp: {
    marginBottom: 16,
  },
  helpItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  circleIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  bodyHelpText: {
    fontSize: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 25,
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
  },
  bodyFeedback: {
    marginTop: 16,
  },
  feedbackItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  feedbackText: {
    marginLeft: 16,
    fontSize: 16,
  },
});
