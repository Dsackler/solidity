import { Modal } from "@components/common";
import { BaseLayout } from "@components/common/layout";
import { Curriculum, Keypoints } from "@components/course";
import Hero from "@components/course/hero";




export default function Course() {
    return (
      <BaseLayout>
        <Hero />
        <Keypoints />
        <Curriculum />
        <Modal />
      </BaseLayout>
    )
  }