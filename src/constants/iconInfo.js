import seta from "../assets/seta_play.png"
import certo from "../assets/icone_certo.png"
import quase from "../assets/icone_quase.png"
import erro from "../assets/icone_erro.png"

//Atribui cada objeto a um endereço de imagem

const imagem = {'seta':{'src':seta,'dataTest':"play-btn"},
  'certo':{'src':certo,'dataTest':"zap-icon"},
  'quase':{'src':quase,'dataTest':"partial-icon"},
  'erro':{'src':erro,'dataTest':"no-icon"}};

  export default imagem;