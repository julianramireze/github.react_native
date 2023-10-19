import React, {useEffect, useState} from 'react';
import {
  StatusBar,
  SafeAreaView,
  Text,
  View,
  Linking,
  Image,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import {Colors} from '../../constants/colors';
import {ThemeStyles} from '../../theme/styles';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from '../../components/button';
import {TabView, TabBar} from 'react-native-tab-view';
import {getUserInfo, getUserOrgs, getUserRepos} from '../../redux/user';
import {useDispatch, useSelector} from 'react-redux';
import InformationItem from '../../components/information_item';
import RepositoryItem from '../../components/repository_item';
import OrganizationItem from '../../components/organization_item';

const renderScene = ({route, user}: any) => {
  switch (route.key) {
    case 'first':
      return <TabInformation user={user} />;
    case 'second':
      return <TabRepositories user={user} />;
    case 'third':
      return <TabOrganizations user={user} />;
    default:
      return null;
  }
};

const UserScreen = ({navigation, route}: any) => {
  const {user} = route?.params;
  const [tabIndex, setTabIndex] = React.useState(0);
  const [tabs] = useState([
    {key: 'first', title: 'Información'},
    {key: 'second', title: 'Repositorios'},
    {key: 'third', title: 'Organizaciones'},
  ]);

  return (
    <>
      <StatusBar backgroundColor={Colors.black} />
      <SafeAreaView style={[ThemeStyles.screen]}>
        <View style={styles.topBar}>
          <Button onPress={() => navigation.goBack()}>
            <Icon name="chevron-left" style={ThemeStyles.icon} size={15} />
          </Button>
          <Text style={styles.title}>
            {user.login.replace(/\b\w/g, (letter: any) => letter.toUpperCase())}
          </Text>
          <Icon
            name="share"
            style={ThemeStyles.icon}
            size={15}
            onPress={() => {
              Linking.openURL(user.html_url);
            }}
          />
        </View>
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={{
              uri: user.avatar_url,
            }}
          />
          <TabView
            renderTabBar={props => (
              <TabBar
                {...props}
                indicatorStyle={styles.tabIndicator}
                renderLabel={({route, focused}) => {
                  return (
                    <View>
                      <Text
                        style={[
                          focused
                            ? styles.activeTabTextColor
                            : styles.tabTextColor,
                        ]}>
                        {route.title}
                      </Text>
                    </View>
                  );
                }}
              />
            )}
            style={styles.tabView}
            navigationState={{index: tabIndex, routes: tabs}}
            renderScene={props => renderScene({...props, user: user})}
            onIndexChange={setTabIndex}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

const TabInformation = (user: any) => {
  const dispatch: any = useDispatch();
  const {userInfo, loadingGetUserInfo} = useSelector(
    (state: any) => state.user,
  );

  useEffect(() => {
    dispatch(getUserInfo({username: user.user.login}));
  }, []);

  return (
    <>
      {loadingGetUserInfo ? (
        <View style={styles.content_container}>
          <ActivityIndicator
            size="large"
            color={Colors.blue}
            style={styles.static_centered_bottom}
          />
        </View>
      ) : (
        <ScrollView
          style={{flex: 1, marginHorizontal: 10}}
          showsVerticalScrollIndicator={false}>
          <>
            <InformationItem title="ID" value={userInfo?.id} />
            <InformationItem
              title="Usuario"
              value={userInfo?.login.replace(/\b\w/g, (letter: any) =>
                letter.toUpperCase(),
              )}
            />
            <InformationItem title="Nombre" value={userInfo?.name} />
            <InformationItem title="Correo" value={userInfo?.email} />
            <InformationItem title="Seguidores" value={userInfo?.followers} />
            <InformationItem
              title="Repositorios publicos"
              value={userInfo?.public_repos}
            />
            {userInfo?.location && (
              <InformationItem title="Ubicación" value={userInfo?.location} />
            )}
          </>
        </ScrollView>
      )}
      <View style={styles.button_container}>
        {userInfo?.blog && (
          <Button
            style={styles.button}
            onPress={() => {
              Linking.openURL(userInfo?.blog);
            }}>
            <Text style={styles.button_text}>Abrir blog</Text>
          </Button>
        )}
        <Button
          style={styles.button}
          onPress={() => {
            Linking.openURL(userInfo?.html_url + '?tab=followers');
          }}>
          <Text style={styles.button_text}>Ver seguidores</Text>
        </Button>
      </View>
    </>
  );
};

const TabRepositories = (user: any) => {
  const dispatch: any = useDispatch();
  const {userRepos, loadingGetUserRepos} = useSelector(
    (state: any) => state.user,
  );

  useEffect(() => {
    dispatch(getUserRepos({username: user.user.login}));
  }, []);

  return (
    <>
      {loadingGetUserRepos ? (
        <View style={styles.content_container}>
          <ActivityIndicator
            size="large"
            color={Colors.blue}
            style={styles.static_centered_bottom}
          />
        </View>
      ) : (
        <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
          <>
            {userRepos.map((repo: any) => (
              <RepositoryItem
                key={repo.id}
                image={repo.owner.avatar_url}
                name={repo.name}
                description={repo.description}
                stars={repo.stargazers_count}
                forks={repo.forks}
                issues={repo.open_issues}
                onPress={() => {
                  Linking.openURL(repo.html_url);
                }}
              />
            ))}
          </>
        </ScrollView>
      )}
      <View style={styles.button_container}>
        <Button
          style={styles.button}
          onPress={() => {
            Linking.openURL(user.user.html_url + '?tab=repositories');
          }}>
          <Text style={styles.button_text}>Ver repositorios</Text>
        </Button>
      </View>
    </>
  );
};

const TabOrganizations = (user: any) => {
  const dispatch: any = useDispatch();
  const {userOrgs, loadingGetUserOrgs} = useSelector(
    (state: any) => state.user,
  );

  useEffect(() => {
    dispatch(getUserOrgs({username: user.user.login}));
  }, []);

  return (
    <>
      {loadingGetUserOrgs ? (
        <View style={styles.content_container}>
          <ActivityIndicator
            size="large"
            color={Colors.blue}
            style={styles.static_centered_bottom}
          />
        </View>
      ) : (
        <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
          <>
            {userOrgs && userOrgs?.length === 0 ? (
              <View style={styles.static_centered_bottom}>
                <Text>No hay organizaciones</Text>
              </View>
            ) : (
              <>
                {userOrgs.map((org: any) => (
                  <OrganizationItem
                    key={org.id}
                    image={org.avatar_url}
                    name={org.login}
                    description={org.description}
                  />
                ))}
              </>
            )}
          </>
        </ScrollView>
      )}
    </>
  );
};

export default UserScreen;
