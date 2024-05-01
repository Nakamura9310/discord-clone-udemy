// userの初期状態
export interface InitialUserState {
  user: null | {
    // nullじゃない場合は以下
    uid: string;
    photo: string;
    email: string;
    displayName: string;
  };
}
