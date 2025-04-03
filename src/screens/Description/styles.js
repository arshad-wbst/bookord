import { StyleSheet } from 'react-native';
import { Colors } from '../../styles';
import { scaleSize } from '../../styles/mixins';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.GRAY_MEDIUM,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: Colors.INPUT_BORDER_COLOR,
    paddingHorizontal: 20,
    backgroundColor: Colors.WHITE,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 14,
    color: "#6D6D6D",
    marginBottom: 20,
    paddingHorizontal: 20,
    marginTop: 10
  },
  optionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: "#D3D3D3",
    paddingHorizontal: 10,
    width: '95%', alignSelf: "center"
  },
  optionText: {
    fontSize: 16,
  },
  viewProfile: {
    fontWeight: "500",
    color: '#1B2431',
    fontSize: scaleSize(12),
    lineHeight: Math.round(scaleSize(14) * 1.2),
    letterSpacing: -0.03 * 12,
  },

  // Company Info
  companyContainer: {
    flexDirection: "row",
    padding: 16,
    justifyContent: "space-between",
    backgroundColor: Colors.WHITE,

  },
  companyName: { fontSize: 20, fontWeight: "bold" },
  ratingRow: { flexDirection: "row", alignItems: "center", paddingVertical: 5 },
  locationRow: { flexDirection: "row", alignItems: "center", paddingVertical: 5 },
  similarJobsRow: { flexDirection: "row", alignItems: "center", paddingVertical: 5 },
  companyLogo: { width: 50, height: 50, resizeMode: "contain" },

  // Buttons
  actionButtons: {
    flexDirection: "row",
    justifyContent: 'space-evenly',
    paddingVertical: 15,
    width: '100%',
    alignSelf: "center",
    backgroundColor: Colors.WHITE,
  },
  messageButton: {
    backgroundColor: "#23334A",
    padding: 10,
    borderRadius: 50,
    width: '45%',
    borderWidth: 1
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "700",
    color: '#1B2431',
    fontSize: scaleSize(13),
    lineHeight: Math.round(scaleSize(14) * 1.4),
    letterSpacing: -0.03 * 13,
  },
  activemessageButton: {
    padding: 10,
    borderRadius: 50,
    width: '48%',
    borderWidth: 1,
    backgroundColor: "white",

  },
  activebuttonText: {
    textAlign: "center",
    fontWeight: "700",
    color: 'white',
    fontSize: scaleSize(13),
    lineHeight: Math.round(scaleSize(13) * 1.4),
    letterSpacing: -0.03 * 13,
  },

  // Tabs
  tabsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.GRAY_DARK,
    backgroundColor: Colors.WHITE,
  },
  tabButton: {
    paddingVertical: 15,
    width: '45%',
    alignItems: "center",
    borderBottomWidth: 0,
    borderRadius: 15,
    borderBottomColor: Colors.PRIMARY
  },
  tabText: {
    textAlign: "center",
    fontWeight: "500",
    color: '#777777',
    fontSize: scaleSize(14),
    lineHeight: Math.round(scaleSize(14) * 1.2),
    letterSpacing: -0.03 * 14,
  },
  activeTabText: {
    textAlign: "center",
    fontWeight: "500",
    color: Colors.PRIMARY,
    fontSize: scaleSize(14),
    lineHeight: Math.round(scaleSize(14) * 1.2),
    letterSpacing: -0.03 * 14,
  },


  // Company Info Tab
  companyInfoContainer: {
    padding: 16,
    backgroundColor: Colors.WHITE,

  },
  sectionTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  companyDescription: { fontSize: 14, color: "#555", marginBottom: 8 },

  // Projects Section
  projectsContainer: {
    marginTop: 5,
    // padding: 16,
    backgroundColor: Colors.WHITE,
    paddingVertical:5
  },
  projectsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    width:'95%',
    alignSelf:"center"
  },
  projectsTitle: { fontSize: 18, fontWeight: "bold" },
  viewAllText: { fontSize: 14, color: "#6A359C", fontWeight: "bold" },
  projectImage: {
    width: 160,
    height: 160,
    borderRadius: 10,
    marginRight: 10,
  },

  reviewsContainer: { 
    padding: 16 ,
    backgroundColor:Colors.WHITE
  },
  reviewsTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },

  // Dropdown Filter
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#ccc",
    marginBottom: 16,
  },
  filterText: { fontSize: 14, color: "#555" },

  // Review Card
  reviewCard: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },

  // Review Header
  reviewHeader: { flexDirection: "row", alignItems: "center", marginBottom: 8 },
  avatar: {
    width: 35,
    height: 35,
    borderRadius: 35 / 2,
    backgroundColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  avatarText: { fontSize: 14, fontWeight: "bold", color: "#333" },
  reviewInfo: { flex: 1 },
  reviewName: { fontSize: 16, fontWeight: "bold" },
  reviewDate: { fontSize: 12, color: "#777" },
  reviewRating: { flexDirection: "row", alignItems: "center" },
  ratingText: { fontSize: 14, marginLeft: 4, fontWeight: "bold" },
  locationText:{
    fontSize: 14, marginLeft: 4, color:'#777'
  },

  // Review Text
  reviewText: { fontSize: 14, color: "#555", marginBottom: 8 },

  // Service Tags
  servicesContainer: { flexDirection: "row", flexWrap: "wrap" },
  serviceTag: {
    backgroundColor: "#F2ECF9",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    marginRight: 8,
    marginBottom: 6,
  },
  serviceText: { fontSize: 12, color: "#6A359C", fontWeight: "bold" },
  

});

export default styles;
