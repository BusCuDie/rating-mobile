import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import colors from '../../../colors';
import Icon from 'react-native-vector-icons/FontAwesome';
export default function DetailNew({route, navigation}) {
  const item = route.params.item;
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.textHeader}>{item.title}</Text>
      </View>

      <Image style={styles.img} source={{uri: item.img}} />
      <Text style={styles.date}>Ngày: 25-11-2021</Text>
      <Text style={styles.content}>
        Đại diện Tổng Công ty điện lực Hà Nội (EVN HANOI) thông tin: “Sản lượng
        điện tiêu thụ những ngày đầu tháng 4/2019 tăng 11 triệu kWh/ngày/so với
        cuối tháng 3”. Lý do dẫn đến sự chênh lệch kỳ hóa đơn tiền tiện tháng 4
        so với kỳ hóa đơn tháng 3 là số ngày sử dụng điện của hóa đơn tháng 4
        (31 ngày) nhiều hơn số ngày sử dụng điện của hóa đơn tháng 3 (28 ngày).
        Số ngày sử dụng điện dài hơn, lượng điện tiêu thụ tăng theo quy luật
        hằng năm vào những tháng hè, cộng với việc giá bán điện điều chỉnh làm
        tổng số tiền điện tháng 4/2019 các hộ dân phải trả tăng hơn so với tháng
        trước. {'\n'}Việc tăng giá bán lẻ điện bình quân thêm 8,36% từ 20/3 cũng
        là nguyên nhân khiến tiền điện của các hộ gia đình tăng theo. Cùng đó,
        biểu tính giá điện lũy tiến theo 6 bậc thang nên khi khách hàng dùng
        điện càng nhiều, tiền điện phải trả càng cao. Cụ thể, giá bán lẻ điện
        sinh hoạt chia theo 6 bậc thang, thấp nhất 1.678 đồng một kWh và cao
        nhất 2.927 đồng một kWh. Đối với việc tính giá điện các phòng trọ, thời
        gian qua ngành điện đã phối hợp với chính quyền các địa phương rà soát
        13.543 khách hàng có nhà cho thuê để ở với tổng số 94.023 phòng trọ.
        Theo đó, EVN Hà Nội đã yêu cầu được 13.484/13.543 khách hàng có nhà cho
        thuê ký cam kết thu tiền điện của người thuê nhà đúng giá quy định. Tuy
        nhiên, với chức năng của mình, EVN HANOI không đủ thẩm quyền để xử phạt
        đối với chủ nhà trọ, trừ trường hợp phối hợp với chính quyền sở tại.
        Song trên thực tế, có quá ít số chủ nhà trọ trên địa bàn thành phố bị xử
        phạt về hành vi vi phạm khi thu tiền điện với giá cao. “Trong trường hợp
        người thuê nhà bị thu tiền điện giá cao hơn so với quy định, có thể gọi
        đến số điện thoại 19001288 (phục vụ 24/7) để được giải quyết theo đúng
        các quy định của Nhà nước”, EVN Hà Nội khuyến cáo.
      </Text>
      <TouchableOpacity
        style={styles.goBackContainer}
        onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={20} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.TORY_BLUE,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textHeader: {
    color: colors.WHITE,
    fontSize: 23,
  },
  date: {
    alignSelf: 'flex-end',
    fontWeight: '700',
    marginRight: 10,
    marginTop: 10,
  },
  img: {
    width: '100%',
    height: 200,
  },
  content: {
    marginTop: 10,
    marginHorizontal: 20,
    fontSize: 16,
  },
  goBackContainer: {
    position: 'absolute',
    top: 25,
    left: 30,
  },
});
