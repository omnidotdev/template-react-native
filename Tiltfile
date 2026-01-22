v1alpha1.extension_repo(name='omni', url='https://github.com/omnidotdev/tilt-extensions')
v1alpha1.extension(name='dotenv_values', repo_name='omni', repo_path='dotenv_values')
load('ext://dotenv_values', 'dotenv_values')

env_local = dotenv_values(".env.local")
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
