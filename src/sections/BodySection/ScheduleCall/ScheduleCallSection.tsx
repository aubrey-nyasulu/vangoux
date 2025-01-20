import './ScheduleCallSection.css'

import SectionTitle from '../../../components/SectionTitle/SectionTitle'
import TypographyComponent from '../../../components/TypographyComponent/TypographyComponent'
import Button from '../../../components/ButtonComponent.tsx/ButtonComponent'


export default function ScheduleCallSection() {
  return (
    <section className='ScheduleCallSection'>
      <div>
        <SectionTitle title='Don’t know how to work with code?' />
        <div className="typoNvisual">
          <TypographyComponent>
            <div className="text">
              <p >Schedule a call and we'll show you how you could become a design-to-code rockstar using VanGoux.</p>
            </div>
            <Button label='Upload Your Sketch File' />
          </TypographyComponent>
        </div>
      </div>
    </section>
  )
}
