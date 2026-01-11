-- Convert growthGoal from enum to text type
ALTER TABLE "Lead" ALTER COLUMN "growthGoal" TYPE TEXT USING "growthGoal"::TEXT;

-- Drop the old enum type
DROP TYPE IF EXISTS "GrowthGoal";
