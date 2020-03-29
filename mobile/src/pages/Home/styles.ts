import styled from "styled-components/native";
import { FlatList } from "react-native";

import * as Pallete from "../../styles/colors";
import { IIncident } from "../../types";

export const Container = styled.SafeAreaView`
  background: ${Pallete.primaryColor};
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  padding: 10px 20px;
`;

export const Image = styled.Image``;

export const Total = styled.Text`
  font-size: 16px;
  color: ${Pallete.textColor};
`;

export const PageContainer = styled.View`
  padding: 0px 20px;
  margin-bottom: 15px;
`;

export const Title = styled.Text`
  font-size: 25px;
  font-weight: bold;
  line-height: 30px;
  margin-bottom: 20px;
  color: ${Pallete.textColor};
`;

export const TitleP = styled.Text`
  font-size: 16px;
  color: ${Pallete.textColor};
`;

class FlatIncidentsList extends FlatList<IIncident> {}

export const IncidentItems = styled(FlatIncidentsList)`
  padding: 20px;
  padding-bottom: 0px;
`;
