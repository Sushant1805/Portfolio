import Card from '../../components/Card'
import data from './data'
import './skills.css'

const Skills = () => {
  return (
    <section id="services">
 <h2>My Skills</h2>
<p>I excel in all the skills listed below</p>

      <div className="container services__container" data-aos="fade-up">
        {
          data.map(item => (
            <Card key={item.id} className="service light">
              <div className="service__icon">{item.icon}</div>
              <div className="service__details">
                <h4>{item.title}</h4>
                  <p>{item.desc}</p>
              </div>
            </Card>
          ))
        }
      </div>
    </section>
  )
}

export default Skills