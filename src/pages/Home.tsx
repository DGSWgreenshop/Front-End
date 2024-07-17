import React, {FC} from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import * as Progress from 'react-native-progress';

const {width} = Dimensions.get('window');

const Home: FC = () => {
  const productImages = [
    require('../assets/Images/cap1.png'),
    require('../assets/Images/cap2.png'),
    require('../assets/Images/cap3.png'),
    require('../assets/Images/cap4.png'),
  ];

  const fundingData = [
    {
      imageUri: require('../assets/Images/funding1.png'),
      title: '갈 곳 없는 폐비닐로 업사이클링 화분을 만들어요',
      amount: '1,139,200원',
      progress: 0.36,
    },
    {
      imageUri: require('../assets/Images/funding2.png'),
      title: '새로운 친환경 프로젝트를 지원해주세요',
      amount: '2,340,000원',
      progress: 0.75,
    },
    // 추가적인 펀딩 데이터를 여기에 추가할 수 있습니다.
  ];
  return (
    <ScrollView style={styles.container}>
      {/* 추천 상품 섹션 */}
      <View style={styles.firstSection}>
        <Text style={styles.sectionTitle}>추천 상품</Text>
        <View style={styles.recommended}>
          <Image
            source={require('../assets/Images/banner.png')} // 실제 이미지 URL로 변경 필요
            style={styles.recommendedImage}
          />
        </View>
      </View>

      {/* 인기 상품 섹션 */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>인기 상품</Text>
        <ScrollView horizontal>
          {productImages.map((image, index) => (
            <View key={index} style={styles.productCard}>
              <Image
                source={image} // 미리 로드된 이미지 배열에서 가져옴
                style={styles.productImage}
              />
              <Text style={styles.productTitle}>playpla-ballcap</Text>
              <Text style={styles.productPrice}>20,300원</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* 현재 진행중인 펀딩 섹션 */}
      <View style={styles.fundingSection}>
        <Text style={styles.sectionTitle}>현재 진행중인 펀딩</Text>
        <ScrollView horizontal>
          {fundingData.map((funding, index) => (
            <View key={index} style={styles.fundingCard}>
              <Image
                source={{uri: funding.imageUri}} // 실제 이미지 URL로 변경 필요
                style={styles.fundingImage}
              />
              <Text style={styles.fundingTitle}>{funding.title}</Text>
              <Progress.Bar
                progress={funding.progress}
                width={null}
                color="#fff"
                unfilledColor="#444"
                borderColor="#444"
                height={10}
                style={styles.progressBar}
              />
              <Text style={styles.fundingAmount}>{funding.amount}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 10,
  },
  section: {
    marginTop: 50,
  },
  fundingSection: {
    marginTop: 50,
  },
  firstSection: {
    marginTop: 50,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    paddingBottom: 30,
    marginLeft: 30,
  },
  recommended: {
    alignItems: 'center',
    borderRadius: 10,
  },
  recommendedImage: {
    width: width - 20,
    height: width / 2,
    borderRadius: 30,
  },
  productCard: {
    width: 150,
    marginRight: 10,
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  productImage: {
    alignItems: 'center',
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  productTitle: {
    color: '#fff',
    marginTop: 10,
    fontSize: 14,
    textAlign: 'center',
  },
  productPrice: {
    color: '#fff',
    marginTop: 5,
    fontSize: 14,
    textAlign: 'center',
  },
  fundingCard: {
    width: width / 1.1,
    marginRight: 10,
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fundingImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  fundingTitle: {
    color: '#fff',
    marginTop: 10,
    fontSize: 14,
    textAlign: 'center',
  },
  progressBar: {
    marginTop: 10,
    width: '100%',
  },
  fundingAmount: {
    color: '#fff',
    marginTop: 5,
    fontSize: 14,
    textAlign: 'center',
  },
});

export default Home;
