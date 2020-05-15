import React, { useContext } from 'react'
import { Formik } from 'formik'
import { Input, Button, Tag, Radio } from 'antd'
import { GlobalContext } from '../../context/GlobalState.tsx'

const inputBottomMargin = { marginBottom: '10px' }
const tagStyle = {
    backgroundColor: '#f50',
    color: 'white',
    ...inputBottomMargin
}

const AddPlayerForm = (props) => {
    const { addPlayer } = useContext(GlobalContext)
    const { getPlayers } = useContext(GlobalContext)

    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                battingAverage: '',
                playerType: ''
            }}
            validate={(values) => {
                let errors = {}

                if (!values.firstName) {
                    errors.firstName = 'First Name Required'
                }

                if (!values.lastName) {
                    errors.lastName = 'Last Name Required'
                }

                if (!values.battingAverage) {
                    errors.battingAverage = 'Batting Average Required'
                }

                if (!values.playerType) {
                    errors.playerType = 'Player Type Required'
                }

                return errors
            }}
            onSubmit={(player, { setSubmitting }) => {
                addPlayer(player)
                    .then(() => {
                        props.onSuccess()
                        getPlayers()
                    })
                    .catch((err) => {
                        props.onFailure(err)
                    })
                    .finally(() => {
                        setSubmitting(false)
                    })
            }}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                submitForm,
                isValid
                /* and other goodies */
            }) => (
                <form onSubmit={handleSubmit}>
                    <Input
                        style={inputBottomMargin}
                        name="firstName"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.firstName}
                        placeholder="First name e.g. Mike"
                    />
                    {errors.firstName && touched.firstName && (
                        <Tag style={tagStyle}>{errors.firstName}</Tag>
                    )}
                    <Input
                        style={inputBottomMargin}
                        name="lastName"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.lastName}
                        placeholder="Last name e.g. Trout"
                    />
                    {errors.lastName && touched.lastName && (
                        <Tag style={tagStyle}>{errors.lastName}</Tag>
                    )}
                    <Input
                        style={inputBottomMargin}
                        name="battingAverage"
                        type="Batting Average"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.battingAverage}
                        placeholder='Batting Average eg. "300"'
                    />
                    {errors.battingAverage && touched.battingAverage && (
                        <Tag style={tagStyle}>{errors.battingAverage}</Tag>
                    )}
                    <Radio.Group
                        name="playerType"
                        onChange={handleChange}
                        value={values.playerType}
                    >
                        <Radio name="HITTER" value={'HITTER'}>
                            HITTER
                        </Radio>
                        <Radio name="PITCHER" value={'PITCHER'}>
                            PITCHER
                        </Radio>
                    </Radio.Group>

                    {errors.playerType && touched.playerType && (
                        <Tag style={tagStyle}>{errors.playerType}</Tag>
                    )}
                    <Button
                        onClick={() => submitForm()}
                        type="submit"
                        disabled={isSubmitting | (touched && !isValid)}
                    >
                        Submit
                    </Button>
                </form>
            )}
        </Formik>
    )
}

export default AddPlayerForm
