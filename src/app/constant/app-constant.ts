import { Channel, translateLang } from "../interfaces/app-interface";

  
  export class AppConstant {
    static DEFAULT_VALUE_LANG = translateLang.EN;
  
    static get LIST_LANG(): {id: translateLang, label: string, image: string}[]{
      return [
        {id: translateLang.EN, label: 'English (US)', image: 'https://app.slice.id/assets/nx-common/engl-us.svg'},
        {id: translateLang.ID, label: 'Bahasa Indonesia (ID)', image: 'https://app.slice.id/assets/nx-common/bahana-indonesia.svg'},
      ]
    }

    static get LIST_CHANNEL(): {id: string, title: string}[] {
      return [
        { id: Channel.instagram, title: 'instagram' },
        { id: Channel.youtube, title: 'youtube' }
      ]
    }
  }
  