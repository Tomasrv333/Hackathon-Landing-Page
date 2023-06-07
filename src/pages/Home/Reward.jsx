import rewardImg from "../../assets/icons/iconReward.svg";
const Reward = () => {
  return (
    <div id="reward" className="reward">
        <div className="reward__content">
            <h2>Cuál es el premio?</h2>
            <p><span>$25.000USD</span> en beneficios entre los equipos ganadores!</p>
            <img src={rewardImg} alt="rewards" style={{ width: "50%" }} />
        </div>
    </div>
  )
}

export default Reward