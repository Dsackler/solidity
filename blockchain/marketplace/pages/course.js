import { Modal } from "@components/common";
import { Curriculum, Keypoints } from "@components/course";
import Hero from "@components/course/hero";




export default function Course() {
    return (
      <div className = "container-md">
          <Hero />
          <Keypoints />
          <Curriculum />
          <Modal />
      </div>
    )
  }