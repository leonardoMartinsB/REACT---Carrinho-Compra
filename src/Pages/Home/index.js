import { useContext, useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Product from '../../components/Product';
import { CartContext } from '../../contexts/CartContext';
import {View, Text, StyleSheet, FlatList, TouchableOpacity, SafeAreaView, ScrollView,
} from 'react-native';

export default function Home() {
  const { cart, addItemCart } = useContext(CartContext);

  const navigation = useNavigation();

  const [products, setProducts] = useState([
    {

    id: '1',
    name: 'Camisa Palmeiras 2024',
    price: 399.99,
    desconto: 5,
    img: 'https://images.tcdn.com.br/img/img_prod/311840/camisa_puma_palmeiras_i_2024_campeao_brasileiro_2023_133099_1_3d08713232747173fdcebd52aef5e701.jpg',
    categoria: 'Nacionais',
    descricao: 'A nova camisa do Palmeiras para 2024, desenhada pela Puma, exibe um design moderno e sofisticado, perfeito para torcedores apaixonados. Com tecido de alta qualidade e tecnologia DryCell, ela garante conforto e ventilação durante os jogos. Além disso, celebra o título de Campeão Brasileiro de 2023, tornando-a um item indispensável para os colecionadores.'
  },
  {
    id: '2',
    name: 'Camisa Barcelona 2022',
    price: 129.99,
    desconto: 15,
    img: 'https://acdn.mitiendanube.com/stores/001/663/605/products/acc4545c1-d4e7c608764f5db98f16552307882636-1024-1024.webp',
    categoria: 'Europeus',
    descricao: 'A camisa oficial do Barcelona de 2022 traz um visual clássico com toques modernos, ideal para os fãs do clube catalão. Produzida com material leve e respirável, ela proporciona máximo conforto, seja durante os jogos ou no dia a dia. O escudo bordado e as cores vibrantes fazem desta peça uma homenagem perfeita à tradição e à paixão pelo futebol.'
  },
  {
    id: '3',
    name: 'Retrô Seleção Brasileira 1958',
    price: 359.99,
    desconto: 6,
    img: 'https://acdn.mitiendanube.com/stores/001/986/628/products/67e2a81aa8e918a96831bd71ecdff61ab-5e127cfe5067bf56d017065729577883-1024-1024.webp',
    categoria: 'Retrô',
    descricao: 'A camisa retrô da Seleção Brasileira de 1958 remete aos grandes momentos do futebol brasileiro, com um design clássico e elegante. Feita de tecido de alta qualidade, ela oferece conforto e durabilidade, sendo perfeita para torcedores nostálgicos. Use-a para reviver as glórias do passado e mostrar seu orgulho pela seleção canarinho.'
  },
  {
    id: '4',
    name: '2º Camisa Bélgica 2024',
    price: 289.99,
    desconto: 5,
    img: 'https://acdn.mitiendanube.com/stores/001/876/620/products/camisa-selecao-belgica-home-i-vinho-euro-2024-24-25-modelo-fan-torcedor-kevin-de-bruyne-lukaku-doku-carrasco-trossard-tielemans-batshuay-1-777466a17e2a97a9a717115891979544-1024-1024.webp',
    categoria: 'Seleções',
    descricao: 'A segunda camisa da Bélgica para 2024 é um tributo ao talento e à determinação da equipe belga. Com um design arrojado e moderno, ela é confeccionada em tecido leve e respirável, garantindo conforto durante todo o uso. Ideal para torcedores que querem mostrar seu apoio com estilo e elegância.'
  },
  {
    id: '5',
    name: 'Camisa Roma 20-21',
    price: 299.99,
    desconto: 3,
    img: 'https://acdn.mitiendanube.com/stores/001/986/628/products/sem-t-tulo-zcc4hlpcgq-339a961575156ec1dc17003164747272-1024-1024.webp',
    categoria: 'Para Você',
    descricao: 'A camisa da Roma para a temporada 20-21 combina tradição e modernidade, apresentando um design elegante e detalhes refinados. Feita com material de alta qualidade, ela proporciona conforto e durabilidade. Perfeita para os fãs do clube que querem exibir seu orgulho romano com estilo e sofisticação.'
  },
   {
    id: '6',
    name: 'Camisa Juventus 2021',
    price: 340.0,
    desconto: 9,
    img: 'https://images.tcdn.com.br/img/img_prod/311840/camisa_adidas_juventus_home_2021_77171_1_20210806221909.jpg',
    categoria: 'Europeus',
    descricao: 'A camisa da Juventus 2021 apresenta um design arrojado e moderno, refletindo a tradição e o prestígio do clube italiano. Feita com tecido de alta performance, ela garante conforto e ventilação durante o uso. Os detalhes em preto e branco, junto com o escudo da Juventus, tornam esta peça indispensável para os torcedores que querem mostrar seu apoio com estilo.'
  },
  {
    id: '7',
    name: 'Camisa Milan 09-10',
    price: 499.99,
    desconto: 10,
    img: 'https://store.calciopedia.com.br/wp-content/uploads/2021/12/milan09-10.jpg',
    categoria: 'Retrô',
    descricao: 'A camisa do Milan de 2009-2010 Com seu design clássico e detalhes nostálgicos, esta camisa é perfeita para os torcedores que querem celebrar as grandes conquistas do Milan. Feita de material resistente e confortável, ela é ideal para colecionadores e fãs do futebol.'
  },
  {
    id: '8',
    name: '2º Camisa Argentina 2022',
    price: 329.99,
    desconto: 8,
    img: 'https://d2r9epyceweg5n.cloudfront.net/stores/001/968/778/rte/Camisa-reserva-da-Argentina-2022-2023-Adidas-31.jpg',
    categoria: 'Seleções',
    descricao: 'A camisa da Argentina 2022 destaca-se pelo seu design moderno e elegante, combinando tradição e inovação. Confeccionada com tecido de alta qualidade, ela proporciona máximo conforto e durabilidade. Ideal para os fãs que querem demonstrar seu apoio à seleção argentina, ela apresenta detalhes icônicos e o emblemático escudo da AFA.'
  },
  ]);

  function handleAddCart(item) {
    addItemCart(item);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cartContent}>
        <Text style={styles.title}>Craque Collection</Text>
        <TouchableOpacity
          style={styles.cartButton}
          onPress={() => navigation.navigate('Cart')}>
          <View style={styles.dot}>
            <Text style={styles.dotText}>{cart?.length}</Text>
          </View>
          <Feather name="shopping-cart" size={35} color="#000" />
        </TouchableOpacity>
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.list}
        data={products}
        keyExtractor={(item) => String(item.id)}
        ListHeaderComponent={() => (
          <ScrollView
            style={styles.scroll}
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            <TouchableOpacity style={styles.scrollView}>
              <Text style={[styles.textScroll, { color: 'black' }]}>
                Para Você
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.scrollView}>
              <Text style={styles.textScroll}>Europeus</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.scrollView}>
              <Text style={styles.textScroll}>Retros</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.scrollView}>
              <Text style={styles.textScroll}>Naconais</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.scrollView}>
              <Text style={styles.textScroll}>Seleções</Text>
            </TouchableOpacity>
          </ScrollView>
        )}
        renderItem={({ item }) => (
          <Product data={item} addToCart={() => handleAddCart(item)} />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#588157',
    paddingEnd: 18,
    paddingStart: 18,
    paddingLeft: 15,
    paddingRight: 15,
  },
  cartContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    backgroundColor: '#588157',
    borderRadius: 7,
    height: 80, 
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 20,
    paddingBottom: 20,
    color: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Arial',
    color: '#fff',
    textDecorationLine: 'underline',
  },
  dot: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    width: 20,
    height: 20,
    borderRadius: 10,
    position: 'absolute',
    zIndex: 99,
    bottom: -20,
  },
  dotText: {
    fontSize: 12,
    color: '#fff',
  },
  scroll: {
    marginBottom: 20,
  },
  scrollView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
  },
  textScroll: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'white',
  },
  list: {
    flex: 1,
  },
});
