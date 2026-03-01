---
description: Execute swarm mode for parallel operations
---

# Swarm Mode Execution Workflow

This workflow activates Moonshot AI's swarm mode for maximum concurrency (50 parallel operations).

## When to Use Swarm Mode
- Multi-file refactoring
- Feature implementations across components
- Batch operations
- Large-scale code transformations

## Steps

1. **Analyze Task Scope**
   - Identify all files that need changes
   - Map dependencies between files
   - Determine parallelization opportunities

2. **Create Implementation Plan**
   - Generate implementation_plan.md artifact
   - Group changes by component
   - Order by dependency (dependencies first)

3. **Activate Swarm Mode**
   // turbo-all
   ```
   Set concurrency to 50
   Distribute tasks across parallel agents
   ```

4. **Execute in Parallel**
   - Process independent files simultaneously
   - Respect dependency order
   - Aggregate results

5. **Verify Integration**
   - Run build/compile checks
   - Execute test suite
   - Verify no conflicts between parallel changes

6. **Create Walkthrough**
   - Document all changes made
   - Show test results
   - Embed verification screenshots

## Configuration
- Max concurrency: 50
- Auto-coordinate: enabled
- Dependency resolution: automatic

## Success Criteria
- ✅ All files modified successfully
- ✅ No merge conflicts
- ✅ Build passes
- ✅ Tests pass
- ✅ Walkthrough.md created
