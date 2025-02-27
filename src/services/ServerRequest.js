import API, {BASE_URL} from '../services/API';
// import NetInfo from '@react-native-community/netinfo';
// import Toast from 'react-native-simple-toast';
import axios from 'axios';
// import {url} from '../services/config';
import {showMessage as notify} from 'react-native-flash-message';
import {Platform} from 'react-native';
import { Typography } from '../styles';
import { getTokens, getUserDetails } from '../LocalStorage';
// export const checkInternetConnection = () => {
//   NetInfo.fetch().then(state => {
//     if (state.isConnected === false) {
//       Toast.showWithGravity(
//         'No internet connection',
//         Toast.SHORT,
//         Toast.BOTTOM,
//       );
//     }
//   });
// };
export const User_data = async () => {
  const authToken = await getTokens();
  if (authToken.access.token) {
    return await API({
      method: 'GET',
      url: BASE_URL + 'users',
      headers: {
        Authorization: `Bearer ${authToken.access.token}`,
        'Content-Type': 'application/json',
      },
    }).then(res => {
      return res;
    });
  }
};
// export const withoutAuth = () => {
//   return axios.create({
//     baseURL: `${url.Server_url}`,
//   });
// };

export const userLogin = async (identifier, password, loginType) => {
  // console.log(loginType, password, identifier, 'checkhere');

  const data = {
      [loginType]: identifier,
      password: password,
      type: loginType,
  };

  // console.log("Login Request Data:", data);

  return await API({
      method: 'POST',
      url: BASE_URL + 'api/auth/login',
      headers: {
          'Content-Type': 'application/json',
      },
      data: JSON.stringify(data),
  }).then(res => {
      // console.log(res, 'loginapi');
      return res;
  }).catch(error => {
      console.error("Login Error:", error.response?.data);
      throw error;
  });
};


// export const newlogin = async (email, password) => {
//   try {
//     const data = {
//       email: email,
//       password: password,
//     };
//     console.log(data, 'login data');
//     const response = await API({
//       method: 'POST',
//       url: BASE_URL + 'auth/login',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       data: JSON.stringify(data),
//     });
//     console.log(response.data, 'login response');
//     if (response.status === 200) {
//       return response.data;
//     } else if (response.status === 401) {
//       throw new Error('Unauthorized: Invalid email or password.');
//     } else {
//       throw new Error('Login failed. Status code: ' + response.status);
//     }
//   } catch (error) {
//     console.error('Login Error:', error.message);
//     throw new Error('Login failed. ' + error.message);
//   }
// };
export const userRegister = async (
  name,
  nickname,
  pnumber,
  email,
  password,
) => {
  const data = {
    first_name: name,
    last_name: nickname,
    mobile: pnumber,
    password: email.toLowerCase(),
    type: password,
  };
  return await API({
    method: 'POST',
    url: BASE_URL + 'api/auth/register',
    headers: {
      'Content-Type': 'application/json',
    },
    data: JSON.stringify(data),
  }).then(res => {
    return res;
  });
};
export const nicke_Name = async text => {
  const data = {
    nickName: text.toLocaleLowerCase(),
  };
  return await API({
    method: 'POST',
    url: BASE_URL + 'auth/check-isnickname-exists',
    headers: {
      'Content-Type': 'application/json',
    },
    data: JSON.stringify(data),
  }).then(res => {
    // console.log(res, 'nicknameapi');
    return res;
  });
};
export const user_Name = async text => {
  const data = {
    nickName: text.toLocaleLowerCase(),
  };
  const authToken = await getTokens();
  return await API({
    method: 'POST',
    url: BASE_URL + 'users/nickname-exists',
    headers: {
      Authorization: `Bearer ${authToken.access.token}`,
      'Content-Type': 'application/json',
    },
    data: JSON.stringify(data),
  }).then(res => {
    return res;
  });
};
export const Otp_verify = async (code, email) => {
  const data = {
    email: email,
    otp: code,
  };
  return await API({
    method: 'POST',
    url: BASE_URL + 'verify-otp',
    headers: {
      'Content-Type': 'application/json',
    },
    data: JSON.stringify(data),
  }).then(res => {
    console.log(res, 'account verify');
    return res;
  });
};
export const send_otp = async email => {
  const data = {
    email: email,
  };
  return await API({
    method: 'POST',
    url: BASE_URL + 'send-otp',
    headers: {
      'Content-Type': 'application/json',
    },
    data: JSON.stringify(data),
  }).then(res => {
    return res;
  });
};
export const forgot_password = async (code, email) => {
  const data = {
    email: email,
    otp: code,
  };
  return await API({
    method: 'POST',
    url: BASE_URL + 'auth/verify-email-otp',
    headers: {
      'Content-Type': 'application/json',
    },
    data: JSON.stringify(data),
  }).then(res => {
    console.log(res.data, 'jhfbvfhjbh');
    return res;
  });
};
export const Reset_password = async (confirm_p, email) => {
  const data = {
    email: email,
    password: confirm_p,
  };
  return await API({
    method: 'POST',
    url: BASE_URL + 'auth/reset-password',
    headers: {
      'Content-Type': 'application/json',
    },
    data: JSON.stringify(data),
  }).then(res => {
    return res;
  });
};
export async function All_games() {
  const authToken = await getTokens();
  return await API({
    method: 'GET',
    url: BASE_URL + 'games/getAllGames',
    headers: {
      Authorization: `Bearer ${authToken.access.token}`,
      'Content-Type': 'application/json',
    },
  }).then(res => {
    return res;
  });
}

export const Create_table_api = async (
  title,
  play_type,
  player_qty,
  money_amt,
  small_blid,
  big_blid,
  video_use,
  date,
  table_open_time,
  movetime,
  game_type,
  money_chips,
  custom_value,
) => {
  const data = {
    gameName: title,
    playingMethod: play_type,
    playerQuantity: player_qty,
    amount: money_amt,
    smallBlind: small_blid,
    bigBlind: big_blid,
    requireVideo: video_use.toLocaleLowerCase(),
    scheduleDate: date,
    startTime: table_open_time,
    moveTime: movetime,
    gamingMode: game_type,
    chipMoney:
      money_chips !== null && money_chips !== undefined
        ? money_chips === 'custom'
          ? custom_value
          : money_chips
        : 'default_value',
  };
  console.log(data, 'table data');
  const authToken = await getTokens();
  return await API({
    method: 'POST',
    url: BASE_URL + 'games/createGame',
    headers: {
      Authorization: `Bearer ${authToken.access.token}`,
      'Content-Type': 'application/json',
    },
    data: JSON.stringify(data),
  }).then(res => {
    return res;
  });
};
export const Game_with_page = async (tab, page) => {
  // console.log(tab, page, 'ppp');
  // console.log(
  //   BASE_URL + `games/getAllUserGames?mode=${tab}&pageNo=3&search=${''}`,
  // );
  const authToken = await getTokens();
  return await API({
    method: 'GET',
    url:
      BASE_URL +
      'games/getAllUserGames?mode=' +
      tab +
      '&pageNo=' +
      page +
      '&search=',
    headers: {
      Authorization: `Bearer ${authToken.access.token}`,
      'Content-Type': 'application/json',
    },
  }).then(res => {
    return res;
  });
};
export const Filter_data = async (tab, page, searchtext) => {
  const authToken = await getTokens();
  return await API({
    method: 'GET',
    url:
      BASE_URL +
      'games/getAllUserGames?mode=' +
      tab +
      '&pageNo=' +
      page +
      '&searchText=' +
      searchtext,
    headers: {
      Authorization: `Bearer ${authToken.access.token}`,
      'Content-Type': 'application/json',
    },
  }).then(res => {
    console.log(res, 'data fff');
    return res;
  });
};
export const Image_upload = async selectedImage => {
  var data = new FormData();
  if (selectedImage.uri !== '') {
    data.append('file', {
      name: selectedImage.fileName,
      type: selectedImage.type,
      uri:
        Platform.OS === 'android'
          ? selectedImage.uri
          : selectedImage.uri.replace('file://', ''),
    });
  }
  const authToken = await getTokens();
  return await API({
    method: 'POST',
    url: BASE_URL + 'users/uploadImage',
    headers: {
      Authorization: `Bearer ${authToken.access.token}`,
      'Content-Type': 'multipart/form-data',
    },
    data: data,
  }).then(res => {
    return res;
  });
};
export const User_update_profile = async (
  f_name,
  email,
  confirm_p,
  user_name,
) => {
  const user = await getUserDetails();
  const authToken = await getTokens();
  const data = {
    id: user.id,
    name: f_name,
    nickname: user_name,
    email: email,
    password: confirm_p,
  };
  console.log(data ,'profile data update');
  return await API({
    method: 'POST',
    url: BASE_URL + 'users/update',
    headers: {
      Authorization: `Bearer ${authToken.access.token}`,
      'Content-Type': 'application/json',
    },
    data: JSON.stringify(data),
  }).then(res => {
    return res;
  });
};
export function showMessage(msg, type) {
  if (type === 'success') {
    notify({
      message: 'Message',
      description: msg,
      textStyle: {fontFamily: Typography.FONT_FAMILY_GENERAL_BOLD},
      titleStyle: {fontFamily: Typography.FONT_FAMILY_GENERAL_BOLD},
      type: 'success',
      icon: 'success',
      autoHide: true,
      animated: true,
      backgroundColor: '#51a351',
      animationDuration: 500,
      hideOnPress: true,
      duration: 5000,
      style: {alignItems: 'center', zIndex: 99999999999999},
    });
  } else if (type === 'error') {
    notify({
      message: 'Message',
      description: msg,
      textStyle: {fontFamily: Typography.FONT_FAMILY_GENERAL_BOLD},
      titleStyle: {fontFamily: Typography.FONT_FAMILY_GENERAL_BOLD},
      type: 'danger',
      icon: 'danger',
      autoHide: true,
      animated: true,
      backgroundColor: '#c34944',
      animationDuration: 500,
      hideOnPress: true,
      duration: 5000,
      style: {alignItems: 'center', zIndex: 99999999999},
    });
  } else if (type === 'info') {
    notify({
      message: 'Message',
      description: msg,
      textStyle: {fontFamily: Typography.FONT_FAMILY_GENERAL_BOLD},
      titleStyle: {fontFamily: Typography.FONT_FAMILY_GENERAL_BOLD},
      type: 'info',
      icon: 'info',
      autoHide: true,
      animated: true,
      animationDuration: 500,
      hideOnPress: true,
      duration: 5000,
      style: {alignItems: 'center', zIndex: 99999999999},
    });
  }
}