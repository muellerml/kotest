package io.kotest.engine.spec

import io.kotest.core.config.configuration
import io.kotest.core.spec.RootTest
import io.kotest.core.spec.Spec
import io.kotest.core.test.TestCaseOrder

/**
 * Returns the materialized tests from the receiver sorted according to the applicable [TestCaseOrder].
 */
fun Spec.resolvedRootTests(): List<RootTest> {
   val order = this.testCaseOrder() ?: configuration.testCaseOrder
   val tests = materializeRootTests()
   return when (order) {
      TestCaseOrder.Sequential -> tests
      TestCaseOrder.Random -> tests.shuffled()
      TestCaseOrder.Lexicographic -> tests.sortedBy { it.testCase.description.displayName().toLowerCase() }
   }
}
