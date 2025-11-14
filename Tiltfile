# load environment variables
load("ext://dotenv", "dotenv")
dotenv(fn=".env.local")

project_name = "template-react-native"

local_resource(
    "install-deps-%s" % project_name,
    cmd="bun i",
    deps=["package.json"],
    labels=[project_name],
)

local_resource(
    "dev-android-%s" % project_name,
    cmd="bun android",
    deps=["package.json"],
    auto_init=False,
    trigger_mode=TRIGGER_MODE_MANUAL,
    labels=[project_name],
)

local_resource(
    "dev-ios-%s" % project_name,
    cmd="bun ios",
    deps=["package.json"],
    auto_init=False,
    trigger_mode=TRIGGER_MODE_MANUAL,
    labels=[project_name],
)

local_resource(
    "dev-web-%s" % project_name,
    cmd="bun web",
    deps=["package.json"],
    auto_init=False,
    trigger_mode=TRIGGER_MODE_MANUAL,
    labels=[project_name],
)
