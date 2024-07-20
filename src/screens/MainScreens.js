import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import DropdownComponent from '../component/Dropdown';
import { fetchBarangsByPelabuhan, fetchNegaras, fetchPelabuhansByNegara, } from '../utils/Httpclient';
import TextAreaComponent from '../component/TextArea';
import TextInputComponent from '../component/TextInput';
import { showToast } from '../component/Toast';

const MainScreen = () => {
  const [negara, setNegara] = useState([]);
  const [pelabuhan, setPelabuhan] = useState([]);
  const [barang, setBarang] = useState([]);
  const [selectedNegara, setSelectedNegara] = useState('');
  const [selectedPelabuhan, setSelectedPelabuhan] = useState('');
  const [selectedBarang, setSelectedBarang] = useState('')
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const getNegaras = async () => {
      try {
        const data = await fetchNegaras();
        setNegara(data);
      } catch (error) {
        showToast('error', 'Error fetching negara', error.message, position = "bottom")
        console.error(error);
      }
    };

    getNegaras();
  }, []);

  useEffect(() => {
    if (selectedNegara) {
      const getPelabuhans = async () => {
        try {
          const data = await fetchPelabuhansByNegara(selectedNegara.id_negara);
          setPelabuhan(data);
        } catch (error) {
          showToast('error', 'Error fetching pelabuhan', error.message, position = "bottom")
          console.error(error);
        }
      };

      getPelabuhans();
    }
  }, [selectedNegara]);

  useEffect(() => {
    if (selectedPelabuhan) {
      const getBarangs = async () => {
        try {
          const data = await fetchBarangsByPelabuhan(selectedPelabuhan.id_pelabuhan);
          setBarang(data);
        } catch (error) {
          showToast('error', 'Error fetching Barang', error.message, position = "bottom")

          console.error(error);
        }
      };

      getBarangs();
    }
  }, [selectedPelabuhan]);

  useEffect(() => {
    const calculatedTotal = selectedBarang?.harga - (selectedBarang?.harga * (selectedBarang?.diskon / 100));
    setTotal(calculatedTotal);
  }, []);

  const handleSetNegara = (value) => {
    setSelectedNegara(value);
  };

  const handleSetPelabuhan = (value) => {
    setSelectedPelabuhan(value);
  };

  const handleSetBarang = (value) => {
    setSelectedBarang(value);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Form Data Barang</Text>
      </View>

      <View style={styles.form}>
        <View style={styles.formGroup}>
          <Text style={styles.label}>NEGARA</Text>
          <DropdownComponent
            title="Negara"
            data={negara}
            labelField="nama_negara"
            valueField="nama_negara"
            value={selectedNegara}
            onChangeValue={handleSetNegara}
            placeholder="negara"
            id="id_negara"
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>PELABUHAN</Text>
          <DropdownComponent
            title="Pelabuhan"
            data={pelabuhan}
            labelField="nama_pelabuhan"
            valueField="nama_pelabuhan"
            value={selectedPelabuhan}
            onChangeValue={handleSetPelabuhan}
            placeholder="pelabuhan"
            id="id_pelabuhan"
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>BARANG</Text>
          <DropdownComponent
            title="Barang"
            data={barang}
            labelField="nama_barang"
            valueField="nama_barang"
            value={selectedBarang}
            onChangeValue={handleSetBarang}
            placeholder="Barang"
            id="id_barang"
          />
        </View>

        <View style={styles.textAreaContainer}>
          <TextAreaComponent value={selectedBarang.description} />
        </View>

        <TextInputComponent
          label="DISCOUNT" value={selectedBarang?.diskon?.toString()}
          suffix="%"
          width={50} />

        <TextInputComponent
          label="HARGA"
          value={selectedBarang?.harga?.toString()}
          width={100} />

        <TextInputComponent
          label="TOTAL"
          value={total.toString()}
          width={100} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  header: {
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 30,
    color: 'grey',
    fontWeight: '700',
  },
  form: {
    justifyContent: 'center',
  },
  formGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  label: {
    fontWeight: '600',
    width: 100,
  },
  textAreaContainer: {
    alignItems: 'flex-end',
    marginRight: 25,
  },
});

export default MainScreen;
