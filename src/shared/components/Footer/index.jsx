function Footer() {
  const hour = new Date().getHours()
  const openHour = 11
  const closeHour = 23
  const isOpen = hour >= openHour && hour <= closeHour

  function setFooterInfo() {
    return isOpen ? (
      <div className="order">
        We're open until {closeHour}:00. Order online!
        <button className="btn">Order now</button>
      </div>
    ) : (
      <div className="order">We open at {closeHour}:00.</div>
    )
  }

  return <footer>{setFooterInfo()}</footer>
}

export default Footer
