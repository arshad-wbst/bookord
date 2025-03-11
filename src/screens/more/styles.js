import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 50,
  },

  /* More Title Header */
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },

  /* Profile Section (No Background) */
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileEmail: {
    fontSize: 14,
    color: 'gray',
  },

  /* Avatar with Circular Background */
  avatarContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E0E0E0', // Light gray background
    justifyContent: 'center',
    alignItems: 'center',
  },

  /* Invite Card (Gray Background) */
  inviteCard: {
    backgroundColor: '#F5F5F5',
    padding: 25,
    borderRadius: 10,
    marginTop: 20,
  },
  inviteTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  inviteDescription: {
    fontSize: 14,
    color: 'gray',
    marginTop: 5,
  },

  /* Menu Section */
  menu: {
    marginTop: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  /* Icon Circle */
  iconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuText: {
    fontSize: 16,
    marginLeft: 15,
  },

  /* Version Text */
  version: {
    textAlign: 'center',
    color: 'gray',
    marginTop: 20,
  },
});

export default styles;
