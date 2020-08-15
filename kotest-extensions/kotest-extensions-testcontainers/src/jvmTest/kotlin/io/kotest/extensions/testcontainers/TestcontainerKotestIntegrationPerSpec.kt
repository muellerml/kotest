package io.kotest.extensions.testcontainers

import io.kotest.core.spec.style.StringSpec

class TestcontainerKotestIntegrationPerSpec : StringSpec({

   val testStartable = configurePerSpec(TestStartable())

   "start count for first test should be one" {
      testStartable.startCount shouldBe 1
   }

   "start count for second test should also be one" {
      testStartable.startCount shouldBe 1
   }
})
